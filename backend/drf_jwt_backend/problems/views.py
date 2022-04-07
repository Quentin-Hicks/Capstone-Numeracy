from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProblemSerializer
from .models import Problem

# Create your views here.
@api_view(['GET', 'POST'])
def problems_list(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


@api_view(['GET', 'PUT', 'DELETE'])
def problem_detail(request, pk):
    if request.method == 'GET':
        pass
    elif request.method == 'PUT':
        pass
    elif request.method == 'DELETE':
        pass

