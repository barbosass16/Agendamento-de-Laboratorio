from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from django.db import IntegrityError
from django.shortcuts import render, redirect
from .models import ServidorBase, Tecnico, Contato, Laboratorio, Endereco, Agendamento, Professor, Aluno, DadosAcademicos
from .serializers import (ServidorBaseSerializer, TecnicoSerializer, ContatoSerializer, LaboratorioSerializer, EnderecoSerializer, AgendamentoSerializer, AlunoSerializer, DadosAcademicosSerializer, ProfessorSerializer)
from django.core.mail import send_mail


##############################################################################
class ServidorBaseAPIView(APIView):
    # METODO GET
    def get(self, request, pk=None):
        if pk:
            try:
                servidores = ServidorBase.objects.get(siape=pk)
                serializer =ServidorBaseSerializer(servidores)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except ServidorBase.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            servidores = ServidorBase.objects.all()
            serializer = ServidorBaseSerializer(servidores, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request, *args, **kwargs):
        serializer = ServidorBaseSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except IntegrityError as e:
                return Response(
                    {"erro": "Um usuário com este SIAPE, matrícula ou email já existe."},
                    status=status.HTTP_400_BAD_REQUEST
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
        try:
            servidor = ServidorBase.objects.get(siape=pk)
        except ServidorBase.DoesNotExist:
            return Response({"erro": "Servidor não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ServidorBaseSerializer(servidor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            servidor = ServidorBase.objects.get(siape=pk)
            servidor.delete()
            return Response({"mensage":"Servidor Removido"}, status=status.HTTP_204_NO_CONTENT)
        except ServidorBase.DoesNotExist:
            return Response({"erro":"Servidor não existe"}, status=status.HTTP_400_BAD_REQUEST)



##############################################################################
class TecnicoAPIView(APIView):
    # METODO GET
    def get(self, request, pk=None):
        if pk:
            try:
                tecnicos = Tecnico.objects.get(siape=pk)
                serializer = TecnicoSerializer(tecnicos)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Tecnico.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            tecnicos = Tecnico.objects.all()
            serializer = TecnicoSerializer(tecnicos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request):
        serializer = TecnicoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
            try:
                tecnico = Tecnico.objects.get(siape=pk)
            except Tecnico.DoesNotExist:
                return Response({"erro":"Tecnico não encontrado"}, status=status.HTTP_404_NOT_FOUND)
            
            serializer = TecnicoSerializer(tecnico, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            tecnico = Tecnico.objects.get(id=pk)
            tecnico.delete()
            return Response({"mensage":"Tecnico Removido"}, status=status.HTTP_204_NO_CONTENT)
        except Tecnico.DoesNotExist:
            return Response({"erro":"Tecnico não existe"}, status=status.HTTP_400_BAD_REQUEST)
########################################################################################################

class AlunoAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                aluno = Aluno.objects.get(siape=pk)
                serializer = AlunoSerializer(aluno)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Aluno.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            aluno = Aluno.objects.all()
            serializer = AlunoSerializer(aluno, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
            try:
                aluno = Aluno.objects.get(siape=pk)
            except Aluno.DoesNotExist:
                return Response({"erro":"Tecnico não encontrado"}, status=status.HTTP_404_NOT_FOUND)
            
            serializer = AlunoSerializer(aluno, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            aluno = Aluno.objects.get(id=pk)
            aluno.delete()
            return Response({"mensage":"Tecnico Removido"}, status=status.HTTP_204_NO_CONTENT)
        except Aluno.DoesNotExist:
            return Response({"erro":"Tecnico não existe"}, status=status.HTTP_400_BAD_REQUEST)
######################################################################################################

class ProfessorAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                professor = Professor.objects.get(siape=pk)
                serializer = ProfessorSerializer(professor)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Professor.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            professor = Professor.objects.all()
            serializer = ProfessorSerializer(professor, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request):
        serializer = ProfessorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
            try:
                professor = Professor.objects.get(siape=pk)
            except Professor.DoesNotExist:
                return Response({"erro":"Tecnico não encontrado"}, status=status.HTTP_404_NOT_FOUND)
            
            serializer = ProfessorSerializer(professor, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            professor = Professor.objects.get(id=pk)
            professor.delete()
            return Response({"mensage":"Tecnico Removido"}, status=status.HTTP_204_NO_CONTENT)
        except Professor.DoesNotExist:
            return Response({"erro":"Tecnico não existe"}, status=status.HTTP_400_BAD_REQUEST)
#####################################################################################################################
class DadosAcademicosAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                dados_academicos = DadosAcademicos.objects.get(siape=pk)
                serializer = DadosAcademicosSerializer(dados_academicos)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except DadosAcademicos.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            dados_academicos = DadosAcademicos.objects.all()
            serializer = DadosAcademicosSerializer(dados_academicos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request):
        serializer = DadosAcademicosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
            try:
                tecnicot = DadosAcademicos.objects.get(siape=pk)
            except DadosAcademicos.DoesNotExist:
                return Response({"erro":"Tecnico não encontrado"}, status=status.HTTP_404_NOT_FOUND)
            
            serializer = DadosAcademicosSerializer(tecnicot, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            tecnicot = DadosAcademicos.objects.get(id=pk)
            tecnicot.delete()
            return Response({"mensage":"Tecnico Removido"}, status=status.HTTP_204_NO_CONTENT)
        except DadosAcademicos.DoesNotExist:
            return Response({"erro":"Tecnico não existe"}, status=status.HTTP_400_BAD_REQUEST)
############################################################################################################3

class AgendamentoAPIView(APIView):
    # METODO GET
    def get(self, request, pk=None):
        if pk:
            try:
                agendamento = Agendamento.objects.get(id=pk)
                serializer = AgendamentoSerializer(agendamento)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Agendamento.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            agendamento = Agendamento.objects.all()
            serializer = AgendamentoSerializer(agendamento, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    # METODO POST
    def post(self, request):
        print("DADOS RECEBIDOS:", request.data)
        serializer = AgendamentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"sucesso":", Dados enviados"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO PUT
    def put(self, request, pk):
            try:
                agendamento = Agendamento.objects.get(id=pk)
            except Agendamento.DoesNotExist:
                return Response({"erro":"Tecnico não encontrado"}, status=status.HTTP_404_NOT_FOUND)
            
            serializer = AgendamentoSerializer(agendamento, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # METODO DELETE
    def delete(self, request, pk):
        try:
            agendamento = Agendamento.objects.get(id=pk)
            agendamento .delete()
            return Response({"mensage":"Tecnico Removido"}, status=status.HTTP_204_NO_CONTENT)
        except Agendamento.DoesNotExist:
            return Response({"erro":"Tecnico não existe"}, status=status.HTTP_400_BAD_REQUEST)


    # METODO PATCH
    def patch(self, request, pk):
        try:
            agendamento = Agendamento.objects.get(id=pk)
        except Agendamento.DoesNotExist:
            return Response({'error': 'Agendamento não encontrado'}, status=status.HTTP_404_NOT_FOUND)

        serializer = AgendamentoSerializer(agendamento, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

            novo_status = serializer.validated_data.get('status')
            if novo_status in ['A', 'R']:
                assunto = 'Atualização da sua solicitação de agendamento'
                status_legivel = 'Aprovada' if novo_status == 'A' else 'Rejeitada'
                mensagem = f'Olá {agendamento.nome},\n\nSua solicitação de agendamento foi {status_legivel}.'
                
                send_mail(
                    assunto,
                    mensagem,
                    'gabrielbarc16@gmail.com',  # remetente
                    [agendamento.email],    # destinatário
                    fail_silently=False,
                )

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ContatoAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                contatos = Contato.objects.get(id=pk)
                serializer = ContatoSerializer(contatos)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Contato.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            contatos = Contato.objects.all()
            serializer = ContatoSerializer(contatos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    def post(self, request):
        serializer = ContatoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            contato = Contato.objects.get(id=pk)
        except Contato.DoesNotExist:
            return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ContatoSerializer(contato, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        try:
            contato = Contato.objects.get(id=pk)
            contato.delete()
            return Response({"mensage":"Contato Excluido"}, status=status.HTTP_204_NO_CONTENT)
        except Contato.DoesNotExist:
            return Response({"erro":"Contato não existe"}, status=status.HTTP_400_BAD_REQUEST)


##############################################################################
class LaboratorioAPIView(APIView):
    def get(self,request,pk):
        if pk:
            try:
                laboratorios = Laboratorio.objects.get(id=pk)
                serializer = LaboratorioSerializer(laboratorios)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Laboratorio.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            laboratorios = Laboratorio.objects.all()
            serializer = LaboratorioSerializer(laboratorios, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = LaboratorioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            lab = Laboratorio.objects.get(id=pk)
        except Laboratorio.DoesNotExist:
            return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = LaboratorioSerializer(lab, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        try:
            lab = Laboratorio.objects.get(id=pk)
            lab.delete()
            return Response({"mensage":"Laboratorio Excluido"}, status=status.HTTP_204_NO_CONTENT)
        except Laboratorio.DoesNotExist:
            return Response({"erro":"Laboratorio não existe"}, status=status.HTTP_400_BAD_REQUEST)


##############################################################################
class EnderecoAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                enderecos = Laboratorio.objects.get(id=pk)
                serializer = EnderecoSerializer(enderecos)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Laboratorio.DoesNotExist:
                return Response({"erro":"Contato não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            enderecos = Endereco.objects.all()
            serializer = EnderecoSerializer(enderecos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = EnderecoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, {"erro":"Dados invalidos, verifique a formatação e tente novamente"}, status=status.HTTP_400_BAD_REQUEST)
    

    def put(self, request, pk):
        try:
            endereco = Endereco.objects.get(tecnico__siape=pk)
        except Endereco.DoesNotExist:
            return Response({"erro":"Endereço não encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EnderecoSerializer(endereco, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class EnderecoDetailAPIView(APIView):
    def delete(self, request, pk):
        try:
            endereco = Endereco.objects.get(tecnico__siape=pk)
            endereco.delete()
            return Response({"mensagem": "Endereço removido com sucesso"}, status=status.HTTP_204_NO_CONTENT)
        except Endereco.DoesNotExist:
            return Response({"erro": "Endereço não encontrado"}, status=status.HTTP_404_NOT_FOUND)


###################################################################################3




    


    
    


    


    
    


    

