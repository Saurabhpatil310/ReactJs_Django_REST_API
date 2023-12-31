# create virtual environments and install all necessary packages first for project then follow below steps
        # for this project vnev name is proj, and to activate it in anaconda prompt 
        # or in vs code anaconda prompt (ctrl+shift+a+c) give command "activate proj"

# Backend - 

1. create django project and in that create App.

2. In App views.py create APIView for API creation with methods GET,POST,DELETE,PATCH,PUT.

3. Include the app to urls.py of your project.

4. Run server using python manage.py runserver.

5. Test API on http://localhost:8000/your_app_name/api/ (you will see a list of all available endpoints)
  # For testing you can use tools like Postman or cURL</s>

6. for MYSQL database import database in settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydatabase',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',   
        'PORT': '3306',                
        }
}

6. a. Also we need to create model in models.py file for database

 b.We have to migrate model 

 c.and register our model like Complain model in this project into admin.py which shows as Complains when we login to Admin Panel.


7. a. we need to create a file named " serializers.py " in which we can create serializer which converts our API data into JSON data format, or it can convert request data into form of serializer data to save in database.

  b.then in INSTALLED_APPS in settings.py include -

         [
          'your_app_name',
          'rest_framework',
          'corsheaders',
          'rest_authtoken',
         ]

8. In MIDDLEWARE include-

        [ 'corsheaders.middleware.CorsMiddleware' ],

9. then include - 

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]

CORS_ALLOW_HEADERS = [
    'Content-Type',
    'Authorization',
]


REST_FRAMEWORK ={
    'DEFAULT_RENDERER_CLASSES':('rest_framework.renderers.JSONRenderer',)
}
  
REST_FRAMEWORK = {                                             # This is Imp because POST and PATCH methods fetch data 
        'DEFAULT_AUTHENTICATION_CLASSES':                       # using authentication tokens for each requests 
        ['rest_authtoken.auth.AuthTokenAuthentication',],
        }


10. also include app urls.py in project urls

11. Run the server and check if API GET,POST,PATCH,PUT,DELETE endpoints returns correct JSON response


# frontend - 


12. In project django directory create App named frontend using react command - npx create-react-app my-app

13. This will create react app with files like src,APP.js etc

14. In src folder we can create folder for pages like home,about,register etc

15. The App.js is main file for page routing . There We have to import app pages from componants folder, and routes for them

16. The page in componants folder are lets say sumbitcompalint in this page we have to write a logic for making request to api end point post 
which we had created in our APIView with a form which sends the date in format mentioned in serializer.py file 

17. runserver django server first redirect to django project folder and give command "python manage.py runserver"  
& for react redirect to frontend app dir and give command "npm start".

create virtual environments and install all necessary packages first for project then follow below steps
        #for this project vnev name is proj, and to activate it in anaconda prompt 
        #or in vs code anaconda prompt (ctrl+shift+a+c) give command "activate proj"

# Backend APIView- 

1. create django project and in that create App.

2. In App views.py create APIView for API creation with methods GET,POST,DELETE,PATCH,PUT.

3. Include the app to urls.py of your project.

4. Run server using python manage.py runserver.

5. Test API on http://localhost:8000/your_app_name/api/ (you will see a list of all available endpoints)
  # For testing you can use tools like Postman or cURL</s>

6. for MYSQL database import database in settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydatabase',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',   
        'PORT': '3306',                
        }
}

6. a. Also we need to create model in models.py file for database

 b.We have to migrate model 

 c.and register our model like Complain model in this project into admin.py which shows as Complains when we login to Admin Panel.


7. a. we need to create a file named " serializers.py " in which we can create serializer which converts our API data into JSON data format, or it can convert request data into form of serializer data to save in database.

  b.then in INSTALLED_APPS in settings.py include -

         [
          'your_app_name',
          'rest_framework',
          'corsheaders',
          'rest_authtoken',
         ]

8. In MIDDLEWARE include-

        [ 'corsheaders.middleware.CorsMiddleware' ],

9. then include - 

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]

CORS_ALLOW_HEADERS = [
    'Content-Type',
    'Authorization',
]


REST_FRAMEWORK ={
    'DEFAULT_RENDERER_CLASSES':('rest_framework.renderers.JSONRenderer',)
}
  
REST_FRAMEWORK = {                                             # This is Imp because POST and PATCH methods fetch data 
        'DEFAULT_AUTHENTICATION_CLASSES':                       # using authentication tokens for each requests 
        ['rest_authtoken.auth.AuthTokenAuthentication',],
        }


10. also include app urls.py in project urls

11. Run the server and check if API GET,POST,PATCH,PUT,DELETE endpoints returns correct JSON response


# frontend - 


12. In project django directory create App named frontend using react command - npx create-react-app my-app

13. This will create react app with files like src,APP.js etc

14. In src folder we can create folder for pages like home,about,register etc

15. The App.js is main file for page routing . There We have to import app pages from componants folder, and routes for them

16. The page in componants folder are lets say sumbitcompalint in this page we have to write a logic for making request to api end point post which we had created in our APIView with a form which sends the date in format mentioned in serializer.py file 

17. runserver django server first redirect to django project folder and give command "python manage.py runserver"  
& for react redirect to frontend app dir and give command "npm start".

