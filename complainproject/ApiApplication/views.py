from django.conf import settings
import mysql.connector
from rest_framework.response import Response 
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from django.db import connection



##storing data using Mysql-connector / API View
#and this below code block bypasses Django's ORM, directly using the MySQL connector to execute an insertion query 
#into the database based on the validated serializer data.



@api_view(['GET'])
def complain_api_view(request, pk=None):
    with connection.cursor() as cursor:
        if pk is not None:
            cursor.execute("SELECT id, title, description FROM apiapplication_complain WHERE id = %s", (pk,))
            row = cursor.fetchone()
            if row:
                result = {"id": str(row[0]), "title": str(row[1]), "description": str(row[2])}
                return Response({"Complaint": result})
            else:
                return Response({"Message": f"Complaint {pk} not found"}, status=404)
        else:
            cursor.execute("SELECT id, title, description FROM apiapplication_complain")
            result = [{"id": str(row[0]), "title": str(row[1]), "description": str(row[2])} for row in cursor.fetchall()]
            return Response(result)




@api_view(['POST'])
def submit_complaint(request):
    serializer_obj = ComplainSerializer(data=request.data)

    if serializer_obj.is_valid():
        data = serializer_obj.validated_data  # Use validated_data from the serializer

        try:
            with connection.cursor() as cursor:
                insert_query = "INSERT INTO apiapplication_complain (id, title, description) VALUES (%s, %s, %s)"
                insert_data = (data['id'], data['title'], data['description'])

                cursor.execute(insert_query, insert_data)

            return Response({"Message": "New Complaint Submitted successfully!"})
        except Exception as e:
            # Log the error for debugging
            print("Error occurred while inserting data:", str(e))
            return Response({"Message": "Error occurred while submitting the complaint"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)




from django.db import transaction

@api_view(['PATCH'])
def update_complaint(request, pk=None):
    if pk is not None:
        serializer_obj = ComplainSerializer(data=request.data, partial=True)

        if serializer_obj.is_valid():
            try:
                update_data = serializer_obj.validated_data

                # Constructing the SQL update query
                update_query = "UPDATE apiapplication_complain SET "
                update_fields = []
                update_values = []

                for field, value in update_data.items():
                    if field != 'id':  # Exclude primary key from update
                        update_fields.append(f"{field} = %s")
                        update_values.append(value)

                if update_fields:
                    update_query += ", ".join(update_fields)
                    update_query += " WHERE id = %s"
                    update_values.append(pk)

                    with transaction.atomic():
                        with connection.cursor() as cursor:
                            cursor.execute(update_query, update_values)

                    return Response({"Message": f"Complaint {pk} updated successfully!"})
                else:
                    return Response({"Message": "No fields to update!"}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"Message": "No complaint ID provided for update"}, status=status.HTTP_400_BAD_REQUEST)




@api_view(['DELETE'])
def delete_complaint(request):
    serializer_obj = ComplainSerializer(data=request.data)  # Assuming the ID is in the request data

    if serializer_obj.is_valid():
        try:
            pk = serializer_obj.validated_data.get('id')  # Assuming 'id' is the primary key field

            db_config = {
                'host': settings.DATABASES['default']['HOST'],
                'user': settings.DATABASES['default']['USER'],
                'password': settings.DATABASES['default']['PASSWORD'],
                'database': settings.DATABASES['default']['NAME'],
            }

            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()

            delete_query = "DELETE FROM apiapplication_complain WHERE id = %s"
            delete_data = (pk,)

            cursor.execute(delete_query, delete_data)

            conn.commit()
            cursor.close()
            conn.close()

            return Response({"Message": f"Complain {pk} deleted successfully!"})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)
    


# def register(request):
#     if request.method == 'POST':
      
#         uname = request.POST.get('username', '')
#         fname = request.POST.get('fname', '')
#         lname = request.POST.get('lname', '')
#         mail = request.POST.get('email', '')
#         pass1 = request.POST.get('password', '')

    

#         if User.objects.filter(username=uname).exists():
#             messages.error(request, 'Username already exists. Please choose a different one.')
#             return render(request, "register.html") # Redirect back to registration page
#         elif User.objects.filter(email=mail).exists():
#             messages.error(request, 'Email already exists. Please use a different one.')
#             return render(request, "register.html") # Redirect back to registration page
#         else:
#             user = User.objects.create_user(username=uname, first_name=fname, last_name=lname, email=mail, password=pass1)
#             user.save()
#             return render(request,"login.html") # Redirect to login page after successful registration
#     else:
#         return render(request, "register.html")


# def login(request):
#     if request.method =='POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         user = authenticate(username=username, password=password)
#         if user is not None:
#              # Successful login
#             auth.login(request, user)
#             return redirect('submit_complaint')
#         else:
#             # Invalid login credentials
#             messages.info(request, "Invalid Username or Password")
#     return render(request, "login.html" )



