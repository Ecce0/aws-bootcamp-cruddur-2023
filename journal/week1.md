# Week 1 — App Containerization
  ## Required Homework


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


   


   
   

