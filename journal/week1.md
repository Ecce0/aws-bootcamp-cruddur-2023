# Week 1 — App Containerization
  ## Required Homework
   
   ### Containerize Application - Dockerfiles, docker-compose
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/a85288930eee851e5e1c870d3f17aaecf80752fb/docker-compose.yml#L1
   ![image](https://user-images.githubusercontent.com/97846441/222040429-d34bffc8-5887-442c-ba86-60ba00bb72dc.png)


   ### Document the Notification Endpoint for the OpenAI Document
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/a85288930eee851e5e1c870d3f17aaecf80752fb/backend-flask/openapi-3.0.yml#L1
   ![image](https://user-images.githubusercontent.com/97846441/222040692-78fe8a97-f561-483d-bc42-9f5d9b047fbc.png)
   
   ### Write a Flask Backend Endpoint for Notifications
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/a85288930eee851e5e1c870d3f17aaecf80752fb/backend-flask/app.py#L69
   ![image](https://user-images.githubusercontent.com/97846441/222040851-9be797f5-5e93-412e-8991-117e4792e9c7.png)

   ### Write a React Page for Notifications
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/a85288930eee851e5e1c870d3f17aaecf80752fb/frontend-react-js/src/pages/NotificationsFeedPage.js#L13
   ![image](https://user-images.githubusercontent.com/97846441/222041197-f2c27d6b-c1d8-44e6-97b0-5c25a1cc919b.png)   
   
   ### Run DynamoDB Local Container and ensure it works
   
   ### Run Postgres Container and ensure it works



-----------------------------------------------------------------------------------------------------------------------------------
#### Below are notes to self 


 ##### 7 OSI Layers - 
   ![image](https://user-images.githubusercontent.com/97846441/221713217-e404e871-3b94-447a-bfc2-7707bd34bcce.png)
    
 https://www.imperva.com/learn/application-security/osi-model/
       
 
 #### Docker
 Dockerhub - provided by Docker - is a container registry. You can host your own container images for private or host and share. 
 There are other container registries. I.e. AWS ECS, Kubernetes?, J-frog. Its free.99. You can also use in VS Code, due to laptop ready to crash, use gitpod.io
   1 - Create a file called 'Dockerfile'
   2 - Within the file, you put the Docker config, each line expresses to the env path how to run the app:
        
        FROM python:3.10-slim-buster - this loads another dockerfile on dockerhub, python is the language, 3 is the version

        WORKDIR /backend-flask - the container will start running from the backend-flask ON THE GUEST OS (the container), its an entry point
         *the host operating system is what you're on (in my case, its windows), the guest os is the container
   ![image](https://user-images.githubusercontent.com/97846441/221714412-279c0b87-d709-44b9-aa48-809dbf560b04.png)

        COPY requirements.txt requirements.txt - this copies "requirements.txt" from the host OS (outside container) and places "requirements.txt" inside the guest OS
                                                 it contains the libraries we want to install
                                                 
        RUN pip3 install -r requirements.txt - this will install the python libraries on the guest OS (inside container)

        COPY . . - the first period means "everything" inside the host OS and the 2nd period means everything in the guest OS 

        ENV FLASK_ENV=development - its just a regular env var; this is where you would set all your env vars and they're set on the guest OS

        EXPOSE ${PORT} - expose the port the app is running on 
        
        CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"] - within the brackets are commands to run for flask


   Be sure to unlock the key-lock to make the url public
   ![image](https://user-images.githubusercontent.com/97846441/221718804-e4e22f80-e345-4b6d-be7b-b30195231f2a.png)
   
   docker build -t  backend-flask ./backend-flask - this commands actually builds the container. You should get a successful message afterwards.
    docker - docker
    build - builds the image
    -t - tags a name
    backend-flask creates the tag name "backend-flask"
    ./backend-flask - looks in the current directory to look for the Dockerfile    
   ![image](https://user-images.githubusercontent.com/97846441/221720231-7e2b35be-d615-45f7-9592-f2c263a29b60.png)
   
   HOST OS - the computer in your house running on an operating system (an Apple Mac running on MacOS system)
   GUEST OS - has to do with virtualization; 
   HYPERVISOR - allows you to virtualize a computer onto a computer
   With Containers, A CONTAINER DAEMON replaces the hypervisor and shares technologies witht he HOST OS and the container 
   ![image](https://user-images.githubusercontent.com/97846441/221722415-e3d87ad3-c541-4f14-92e0-a64ce7542ac3.png)
   
   Proof of image built -    
   ![image](https://user-images.githubusercontent.com/97846441/221723096-b08e8d24-6c60-4d41-a485-23bf9dc07b34.png) 
   
   ![image](https://user-images.githubusercontent.com/97846441/221723185-2e913fa4-3e64-43b6-9d88-0eb03dc966cb.png)


   To create multiple containers, use docker-compose.yml and put it in the root directory. Here is an example:
         
         version: "3.8"
         services:
          backend-flask:
           environment:
            FRONTEND_URL: "https://3000-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
            BACKEND_URL: "https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
           build: ./backend-flask
           ports:
            - "4567:4567"
           volumes:
            - ./backend-flask:/backend-flask
          frontend-react-js:
           environment:
            REACT_APP_BACKEND_URL: "https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
           build: ./frontend-react-js
           ports:
            - "3000:3000"
           volumes:
            - ./frontend-react-js:/frontend-react-js

    # the name flag is a hack to change the default prepend folder
    # name when outputting the image names
    networks: 
      internal-network:
      driver: bridge
      name: cruddur

   
 #### Swagger set up example 
    /api/activities/notifications:
      get:
       description: 'Return a feed of activity for all of those that I follow'
       tags:
        - activities
       parameters: []
       responses:
         '200':
           description: Returns an array of activities
           content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Activity'    <------------ pay attention to this, reference downwards
            
            
  ##### Schema for line 109 'Activity' 
    components:
    schemas:
      Activity:
        type: object
        properties:
          uuid:
            type: string
            example: 0056a369-4618-43a4-ad88-e7c371bf5582
          display_name:
            type: string
            example: "Andrew Brown"
          handle:
            type: string
            example: "andrewbrown"
          message:
            type: string
            example: "Who likes pineapple on their pizza?"
          replies_count:
            type: integer
            example: 5
          reposts_count:
            type: integer
            example: 2
          likes_count:
            type: integer
            example: 103
          created_at:
            type: string
            example: "2023-02-06T18:11:03+00:00"
          expires_at:
            type: string
            example: "2023-02-06T18:11:03+00:00"

   
   #### the above schema matches the above schema
       results = [{
      'uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
      'handle':  'lightBright',
      'message': 'I lost half of my light pieces',
      'created_at': (now - timedelta(days=2)).isoformat(),
      'expires_at': (now + timedelta(days=5)).isoformat(),
      'likes_count': 5,
      'replies_count': 1,
      'reposts_count': 0,
      'replies': [{
        'uuid': '26e12864-1c26-5c3a-9658-97a10f8fea67',
        'reply_to_activity_uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
        'handle':  'worf',
        'message': 'this post has no honor!',
        'likes_count': 0,
        'replies_count': 0,
        'reposts_count': 0,
        'created_at': (now - timedelta(days=2)).isoformat()
      }],
    }
    ]

