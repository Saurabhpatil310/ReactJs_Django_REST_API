from django.urls import path
from . import views

urlpatterns = [
    path('complain/', views.complain_api_view),
    path('complain/<int:pk>/', views.complain_api_view),  # Retrieve a specific complaint by ID
    path('complain/post/', views.submit_complaint),
    path('complain/patch/<int:pk>/', views.update_complaint),  # Update a specific complaint by ID
    path('complain/delete/', views.delete_complaint),
]

  


   






