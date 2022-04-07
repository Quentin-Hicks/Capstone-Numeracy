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
        problems = Problem.objects.all()
        serializer = ProblemSerializer(problems, many=True)
        print('math')
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProblemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('math only hurts a lot')
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def problem_detail(request, pk):
    problem = get_object_or_404(Problem, pk=pk)
    if request.method == 'GET':
        serializer = ProblemSerializer(problem)
        print('big number slumber')
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProblemSerializer(problem, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('by the numbers')
        return Response(serializer.data)
    elif request.method == 'DELETE':
        problem.delete()
        print('the odds are now even')
        return Response(status=status.HTTP_204_NO_CONTENT)

