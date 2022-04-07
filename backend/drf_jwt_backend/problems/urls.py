from django.urls import path
from . import views

urlpatterns = [
    path('', views.problems_list),
    path('<int:pk>', views.problem_detail)
]