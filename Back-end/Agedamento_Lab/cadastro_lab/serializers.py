from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import ServidorBase
from .models import Tecnico
from django.utils.translation import gettext_lazy as _
from .models import Contato
from .models import Laboratorio
from .models import Endereco
from .models import Agendamento
from .models import Professor, DadosAcademicos, Aluno

class LoginSerializer(serializers.Serializer):
    siape = serializers.CharField(required=False, allow_blank=True)
    matricula = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        siape = attrs.get('siape')
        matricula = attrs.get('matricula')
        email = attrs.get('email')
        password = attrs.get('password')

        if not (siape or matricula or email):
            raise serializers.ValidationError(_("Informe SIAPE, matrícula ou e-mail."))

        user = authenticate(
            request=self.context.get('request'),
            siape=siape if siape else None,
            matricula=matricula if matricula else None,
            email=email if email else None,
            password=password
        )

        if not user:
            raise serializers.ValidationError(_("Credenciais inválidas."))

        attrs['user'] = user
        return attrs





class ServidorBaseSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = ServidorBase
        fields = ['siape', 'email', 'nome', 'password']  # todos os campos necessários

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = ServidorBase(**validated_data)
        if password:
            user.set_password(password)  # criptografa a senha
        user.save()
        return user

class TecnicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tecnico
        fields = '__all__'

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class DadosAcademicosSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosAcademicos
        fields = '__all__'

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato 
        fields = '__all__' 

class LaboratorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratorio
        fields = '__all__'   

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = '__all__'

class AgendamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agendamento 
        fields = '__all__'  