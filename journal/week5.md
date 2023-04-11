# Week 5 — DynamoDB and Serverless Caching

 ## Created Utility Scripts for DynamoDB and refactored python code to be more dynamic
 ![image](https://user-images.githubusercontent.com/97846441/227073090-4a611a7d-6698-49db-9c0b-a10a2645570c.png)
  
  
  
 ## Implement Schema Load Script + Implement Seed Script + Implement Scan Script
  
  #### Schema Load - https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/ddb/schema-load#L1
  #### Seed - https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/ddb/seed#L1
  #### Scan - https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/ddb/scan#L1
   
   
 ## Implement Pattern Scripts for: 
  #### Read and List Conversations -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/ddb/patterns/get-conversation#L1
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/ddb/patterns/list-conversations#L1
   
  #### (Pattern A) Listing Messages in Message Group into Application -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/lib/ddb.py#L19
  
  #### (Pattern B) Listing Messages Group into Application -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/lib/ddb.py#L49
   
  #### (Pattern C) Creating a Message for an existing Message Group into Application -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/lib/ddb.py#L79
   
  #### (Pattern D) Creating a Message for a new Message Group into Application -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/lib/ddb.py#L112
   
  #### (Pattern E) Updating a Message Group using DynamoDB Streams -
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/app.py#L174
   
   
   
 
 ## Implement Update Cognito ID Script for Postgres Database
   https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/8b2c0f2091d213340e0bd9b74545dd74ee686e45/backend-flask/bin/db/update_cognito_user_ids#L1




--------------------------------------------------
# Everything below are notes to self

In schema-load, attrs is set to localhost:8000 for dev environment purposes

When you spin up a new workspace env and you're working on the backend, always do the following:
  1. Docker Up
  2. Run ./bin/db/setup, ./bin/ddb/schema-load (if you receive an error, run ./bin/ddb/drop cruddur-messages), ./bin/ddb/seed
  3. Docker Reset/Up
  4. Run ./bin/ddb/scan to make sure the conversations came through
 
 
