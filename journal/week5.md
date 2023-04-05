# Week 5 — DynamoDB and Serverless Caching

  ## Created Utility Scripts for DynamoDB and refactored python code to be more dynamic
  ![image](https://user-images.githubusercontent.com/97846441/227073090-4a611a7d-6698-49db-9c0b-a10a2645570c.png)




--------------------------------------------------
# Everything below are notes to self

In schema-load, attrs is set to localhost:8000 for dev environment purposes

When you spin up a new workspace env and you're working on the backend, always do the following:
  1. Docker Up
  2. Run ./bin/db/setup, ./bin/ddb/schema-load (if you receive an error, run ./bin/ddb/drop cruddur-messages), ./bin/ddb/seed
  3. Docker Reset/Up
  4. Run ./bin/ddb/scan to make sure the conversations came through
 
 
