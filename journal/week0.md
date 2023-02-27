# Week 0 — Billing and Architecture

## Required Homework

### Lucid Charts:
   -Logical, Cruddur Diagram - 
    https://lucid.app/lucidchart/3d272b19-6a75-4848-b22f-145c116c1dc8/edit?viewport_loc=96%2C275%2C1110%2C519%2C0_0&invitationId=inv_7e8b2fdd-a082-47cd-83e9-c4dc38932922 
    ![image](https://user-images.githubusercontent.com/97846441/221456237-99bda114-ab43-4a05-9587-2605115c2b1a.png)

   -Conceptual, Cruddur Diagram -
    https://lucid.app/lucidchart/invitations/accept/inv_4f3ace93-b454-450a-81e5-2d4c7494a410
    ![image](https://user-images.githubusercontent.com/97846441/221459969-b563d92f-5184-4463-987d-2834bb8953f4.png)


### Installed AWS CLI:
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/main/.gitpod.yml
  
 
### Create Admin User
 ![image](https://user-images.githubusercontent.com/97846441/221667372-0a730d59-158f-408b-802f-3308ac864bb9.png)
 
  
### Create Billing Alarm
![image](https://user-images.githubusercontent.com/97846441/221670689-919630c6-c6d2-4ce1-a3c6-ffb5b3f36b5d.png)



### Create a Budget
 ![image](https://user-images.githubusercontent.com/97846441/221667624-1dafeac2-e16f-4480-b0b1-e8e0e9f61912.png)
 
  
--------------------------------------------------------------------
#### Below are notes for self
 ##### 6 Pillars:
        -Operational Excellence
        -Security
        -Reliability
        -Performance Efficiency
        -Cost Optimization
        -Sustainability
      
##### Gitpod.io
      You always need to stage > commit > then push to save changes
      Your environment vars can be found in User > settings > variables
    
   
##### Linux
      Commands:
         gp env (variable name) - saves the env vars to Gitpod
         ls -la will list out files in a pretty way
         export ENV_VARIABLE="testing123" will create a env var, but won't save it
         aws sts get-caller-identity t0 make sure you're logged in to the aws account via linux
         
         
##### AWS 
      Security:
           AWS Organizations - Designated owner for each AWS Account under the AWS Org
           If you have multiple units within an enterprise organization, then you want to create organization unites within your root account. This keeps AWS accounts  organized especially when it comes to billing, access, permissions, policies, IAM user groups/roles, etc. 
           
      IAM: 
         IAM Users - regular user through AWS using login/username and password
         Systems Users - user that can be attached to a system, non-human?
         Federated Users -users  access from on-site environment without logins and passwords

         IAM USERS are a global service. 

         Every human user, except a federated user, needs to use MFA

         Get into the habit of creating tags
         
      IAM Roles:
         AWS Provides Policies and they can also be customized 
         Policies get be attached to a group of users, individuals, admin roles
         Admin roles itself are attached to a service(s)
         Always apply the practice of the Least Privilege - give users/user groups/roles the least privilege, keep them simple until more permissions are needed!
         
      SCP:
         SCP specifies the maximum permission that can be used by users and roles in your ogranization's accounts.
         
      AWS Cloudtrail:
         Monitors data security and residence
         Understand the region/AZ vs Global services concepts
         Audit logs for IR/forensics

  
    
