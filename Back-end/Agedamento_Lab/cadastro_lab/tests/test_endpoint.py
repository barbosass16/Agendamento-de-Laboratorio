
from rest_framework.test import APIClient
from django.test import TestCase

class TestAllEndpoints(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_all_views(self):
        urls = [
            ('/api/alunos/', 'get'),
            ('/api/alunos/', 'post', {'nome': 'Teste', 'email': 'teste@email.com'}),
            ('/api/labs/', 'get'),
            
        ]

        for url_info in urls:
            method = url_info[1]
            data = url_info[2] if len(url_info) > 2 else None

            response = getattr(self.client, method)(url_info[0], data, format='json')
            print(f"{method.upper()} {url_info[0]} -> {response.status_code}")
            self.assertIn(response.status_code, [200, 201, 204])
