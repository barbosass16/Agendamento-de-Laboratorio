from django.urls import path 
from .views import ServidorBaseAPIView, TecnicoAPIView, ContatoAPIView, LaboratorioAPIView, EnderecoAPIView, AgendamentoAPIView
from .views import ServidorBaseAPIView, TecnicoAPIView, ContatoAPIView, LaboratorioAPIView, EnderecoDetailAPIView, ProfessorAPIView, AlunoAPIView, DadosAcademicosAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('servidor/', ServidorBaseAPIView.as_view(), name='servidor'),
    path('servidor/<int:pk>/', ServidorBaseAPIView.as_view(),name='servidor_detalhe'),
    path('tecnicos/', TecnicoAPIView.as_view(), name='tecnicos'),
    path('tecnicos/<int:pk>/', TecnicoAPIView.as_view(), name='tecnicos_detalhe'),
    path('laboratorios/', LaboratorioAPIView.as_view(), name='laboratorios_detalhe'),
    path('laboratorios/<int:pk>/', LaboratorioAPIView.as_view(), name='laboratorios_detalhe'),
    path('agendamento/', AgendamentoAPIView.as_view(), name='agendamento'),
    path('agendamento/<str:pk>/', AgendamentoAPIView.as_view(), name='enderecos_datalhe'),
    path('aluno/', AlunoAPIView.as_view(), name='aluno'),
    path('aluno/<int:pk>/', AlunoAPIView.as_view(), name='aluno'),
    path('professor/', ProfessorAPIView.as_view(), name='professor'),
    path('professor/<int:pk>/', ProfessorAPIView.as_view(), name='professor'),
 ]