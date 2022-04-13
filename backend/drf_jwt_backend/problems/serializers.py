from rest_framework import serializers
from .models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ['id', 'title', 'content', 'hints', 'answer', 'resources']
        # depth = 1

    # problem_id = serializers.IntegerField(write_only=True)