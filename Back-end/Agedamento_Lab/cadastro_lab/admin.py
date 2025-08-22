from django.contrib import admin
from .models import ServidorBase, Tecnico, Contato, Laboratorio, Endereco, Agendamento, Professor, DadosAcademicos, Aluno



admin.site.register(ServidorBase)
admin.site.register(Tecnico)
admin.site.register(Laboratorio)
admin.site.register(Agendamento)
admin.site.register(Aluno)
admin.site.register(Professor)
