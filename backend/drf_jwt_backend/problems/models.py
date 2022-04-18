from django.db import models

# Create your models here.
class Problem(models.Model):
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    hints = models.CharField(max_length=255)
    answer = models.TextField(max_length=255)
    resources = models.TextField(max_length=255)
    live_status = models.BooleanField(default=False, max_length=255)
    correctAnswers = models.IntegerField(default=0)
    incorrectAnswers = models.IntegerField(default=0)
    hintsUsed = models.IntegerField(default=0)