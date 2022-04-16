from rest_framework import serializers
from .models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = [
            'id', 'title', 'content',
            'hints', 'answer', 'resources',
            'live_status', 
            'correctAnswers',
            'incorrectAnswers', 'hintsUsed'
            ]
        # depth = 1

        # live_status = serializers.BooleanField(write_only=True)