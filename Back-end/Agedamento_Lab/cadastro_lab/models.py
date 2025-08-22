from django.db import models
from django.core.validators import RegexValidator
from datetime import date
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError



# Gerenciador de usuario que cria um user.(Super Usuarios serao inseridos manualmente no painel django admin)
class ServidorManager(BaseUserManager):
    def create_user(self, siape, password=None, **extra_fields):
        if not siape:
            raise ValueError("O campo SIAPE é obrigatório.")

        user = self.model(siape=siape, **extra_fields)
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password() 
        user.save(using=self._db)
        return user

    def create_superuser(self, siape, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser precisa ter is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser precisa ter is_superuser=True.')

        return self.create_user(siape, password, **extra_fields)


# ------------------------
# MODELO SERVIDORBASE
# ------------------------
class ServidorBase(AbstractBaseUser, PermissionsMixin):

    TIPO=[
        ("PROF","Professor"),
        ("TEC","Tecnico"),
    ]
    tipo = models.CharField(max_length=20, blank=True, null=True, choices=TIPO)
    siape = models.CharField(max_length=7, unique=True, blank=True, primary_key=True,
                             validators=[RegexValidator(r'^\d{7}$', 'Digite exatamente 7 dígitos numéricos.')])
    matricula = models.CharField(max_length=20, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True, default='email@exemplo.com')
    nome = models.CharField(max_length=100, blank=True, null=True)
    cpf = models.CharField(max_length=11, blank=True, null=True,
                           validators=[RegexValidator(r'^\d{11}$', 'O CPF deve conter exatamente 11 dígitos numéricos')], verbose_name='CPF')
    rg = models.CharField(max_length=20, blank=True, null=True, unique=True)

    def validate_data_nascimento(value):
        if value > date.today():
            raise ValidationError("A data de nascimento não pode estar no futuro.")

    data_nascimento = models.DateField(blank=True, null=True, validators=[validate_data_nascimento])
    SEXO_CHOICES = [('M', 'Masculino'), ('F', 'Feminino')]
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=True, null=True)
    ESTADO_CIVIL_CHOICES = [('Solteiro', 'Solteiro'), ('Casado', 'Casado'), ('Viuvo', 'Viuvo'), ('Outros', 'Outros')]
    estado_civil = models.CharField(max_length=20, choices=ESTADO_CIVIL_CHOICES, blank=True, null=True)


    groups = models.ManyToManyField(
        Group,
        related_name='servidorbase_set',  
        blank=True,
        help_text='Grupos que este usuário pertence.',
        verbose_name='grupos'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='servidorbase_set',
        blank=True,
        help_text='Permissões específicas para este usuário.',
        verbose_name='permissões do usuário'
    )


    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  

    objects = ServidorManager()

    USERNAME_FIELD = 'siape'  
    REQUIRED_FIELDS = ['email']  

    def __str__(self):
        return self.nome or "Usuário sem nome"

    @property
    def idade(self):
        if not self.data_nascimento:
            return None
        hoje = date.today()
        return hoje.year - self.data_nascimento.year - ((hoje.month, hoje.day) < (self.data_nascimento.month, self.data_nascimento.day))

    @property
    def tipo_usuario(self):
        """Determina se é Servidor ou Aluno"""
        if self.siape:
            return "Servidor"
        elif self.matricula:
            return "Aluno"
        else:
            return "Indefinido"
    
class Agendamento(models.Model):
    nome = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    email = models.EmailField()
    horario_inicio = models.DateTimeField()
    horario_fim = models.DateTimeField()
    ATIVIDADE_CHOICES=[
        ('E', 'Estudo'),
        ('T', 'Trabalho Academico'),
        ('C', 'Cadastro'),
    ]
    atividade = models.CharField(max_length=1, choices=ATIVIDADE_CHOICES, default='E')
    STATUS_CHOICE = [
        ('A', 'Aprovado'),
        ('P', 'Pendente'),
        ('R', 'Rejeitado'),
    ]

    status = models.CharField(max_length=1, choices=STATUS_CHOICE, default='P')

    def __str__(self):
        return f"{self.nome} - {self.status}"



 

     
    

class DadosAcademicos(models.Model):

    CARGOS = [
        ('PROF', 'Professor'),
        ('COORD', 'Coordenador'),
        ('DIR', 'Diretor'),
        ('TEC', 'Técnico Administrativo'),
    ]
    cargo = models.CharField(max_length=100, blank=True, null=True, choices=CARGOS)

    

    RACA_CHOICES = [
        ('BRANCA', 'Branca'),
        ('PRETA', 'Preta'),
        ('PARDA', 'Parda'),
        ('AMARELA', 'Amarela'),
        ('INDIGENA', 'Indígena'),
        ('NAO_DECLARADO', 'Não declarado'),
    ]
    raca = models.CharField(max_length=50, blank=True, null=True, choices=RACA_CHOICES)

    TIPO_SANGUINEO_CHOICES = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
        ('ND', 'Não declarado'),
    ]
    tipo_sanguineo = models.CharField(max_length=3, choices=TIPO_SANGUINEO_CHOICES, blank=True, null=True) 

    class Meta:
        abstract = True



class Contato(models.Model):
    telefone = models.CharField(max_length=20, blank=True, validators=[ RegexValidator(r'^\(\d{2}\) \d{5}-\d{4}$', 'Digite o seu numero no formato (99) 99999-9999')])# um validador igual ao do numero de siape so que com formatações diferentes para aceitar a mascara no numero
     

    class Meta:
        abstract = True

class Endereco(models.Model): # corrigir incluindo cep e outros campos, e tambem os validators
    cep = models.CharField(max_length=9, validators=[RegexValidator(r'^\d{5}-\d{3}$', "Digite um CEP valido no formato 12345678 ou 12345-678.")], blank=True, null=True)
    n_casa = models.CharField(max_length=100, blank=True, null=True)
    rua = models.CharField(max_length=100, blank=True, null=True)
    bairro = models.CharField(max_length=100, blank=True, null=True)
    municipio = models.CharField(max_length=55, blank=True, null=True)
    nascionalidade = models.CharField(max_length=55, blank=True, null=True)
    passaporte = models.CharField( max_length=15, validators=[RegexValidator(r'^[A-Z0-9]{5,15}$', 'Digite um número de passaporte válido, apenas letras e números, sem espaços.')], verbose_name="Passaporte", blank=True,   null=True )
    rne = models.CharField(max_length=20, blank=True, null=True) 

    class Meta:
        abstract = True

class Aluno( DadosAcademicos, Contato,Endereco):
    matricula = models.CharField(max_length=20, unique=True, default="TEMP", primary_key=True)
    nome = models.CharField(max_length=100)
    nome_pai = models.CharField(max_length=100)
    nome_mae = models.CharField(max_length=100)
    email = models.EmailField(unique=True)


    GRUPO_COTA_CHOICES = [
        ('Nenhuma', 'Nenhuma'),
        ('Renda Baixa', 'Renda Baixa'),
        ('Indígena', 'Indígena'),
        ('Negro', 'Negro'),
        ('PNE', 'Pessoa com Necessidade Especial'),
    ]
    
    FORMA_INGRESSO_CHOICES = [
        ('INTEGRADO', 'Curso Integrado'),
        ('SUBSEQUENTE', 'Curso Subsequente'),
        ('TRANSFERENCIA', 'Transferência Facultativa'),
        ('Outro', 'Outro'),
    ]
    
    REGIME_ALUNO_CHOICES = [
        ('Integral', 'Integral'),
        ('Parcial', 'Parcial'),
    ]

    CURSO = [
        ("ADM", "Administração"),
        ("INFO", "Informatica"),
    ]


    curso = models.CharField(max_length=30, choices=CURSO, blank=True, null=True)
    ano_ingresso = models.DateField(max_length=4, blank=True, null=True)
    grupo_cota = models.CharField(max_length=50, choices=GRUPO_COTA_CHOICES, blank=True, null=True)
    forma_ingresso = models.CharField(max_length=20, choices=FORMA_INGRESSO_CHOICES, blank=True, null=True)
    regime_aluno = models.CharField(max_length=20, choices=REGIME_ALUNO_CHOICES, blank=True, null=True)
    escola_anterior = models.CharField(max_length=100, blank=True, null=True)
    ano_conclusao_anterior = models.IntegerField(blank=True, null=True)

    def validate_data_nascimento(value):
        if value > date.today():
            raise ValidationError("A data de nascimento não pode estar no futuro.")
    data_nascimento = models.DateField(blank=True, null=True, validators=[validate_data_nascimento])

    def __str__(self):
        return f"{self.nome} ({self.matricula})"


class Tecnico(ServidorBase, Contato, DadosAcademicos, Endereco):
    setor = models.CharField( max_length=50)

    def __str__(self):
        return f"{self.nome} - {self.setor}"


class Professor(ServidorBase, Contato, DadosAcademicos, Endereco):
    AREAS_ATUACAO = [
        ('PORT', 'Português'),
        ('MAT', 'Matemática'),
        ('FIS', 'Física'),
        ('QUI', 'Química'),
        ('BIO', 'Biologia'),
        ('HIS', 'História'),
        ('GEO', 'Geografia'),
        #--------------------
        ('INF', 'Informática'),  
        ('ADM', 'Administração'),
        ]
    area_atuacao = models.CharField(max_length=100, choices=AREAS_ATUACAO, blank=True, null=True)

    def __str__(self):
        return f"{self.nome} - {self.area_atuacao}"
    















class Laboratorio(models.Model):
    nome_laboratorio = models.CharField(max_length=50)
    n_maquinas = models.PositiveIntegerField(verbose_name="Quantidade de Máquinas") # verbode_name e como sera exibido no django admin o nome da variavel n_maquinas

    def __str__(self):
        return self.nome_laboratorio
    



