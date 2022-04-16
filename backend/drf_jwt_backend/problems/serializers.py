from rest_framework import serializers
from .models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = [
            'id', 'title', 'content',
            'hints', 'answer', 'resources',
            'live_status', 'correct_answers',
            'incorrect_answers', 'hints_used'
            ]
        # depth = 1

        live_status = serializers.BooleanField(write_only=True)