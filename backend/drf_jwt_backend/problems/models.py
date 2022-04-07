from django.db import models

# Create your models here.
class Problem(models.Model):
    title = models.CharField(max_length=255)
    # content = models.CharField(max_length=255)
    # hints = models.CharField(max_length=255)
    # answer = models.DecimalField(max_digits=24, decimal_places=6)
    # learningResources = models.CharField(max_length=255)