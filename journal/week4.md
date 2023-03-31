# Week 4 — Postgres and RDS

## Create RDS Postgres Instance && Bash scripting for common database actions

  ![image](https://user-images.githubusercontent.com/97846441/226716213-bb6df6e2-2730-4669-aea6-ba86cb706c82.png)

  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/bin/rds-update-sg-rule#L9
  
  ![image](https://user-images.githubusercontent.com/97846441/226716615-d86daf70-5070-4bf1-9fe7-0b705bab2d9d.png)
  
  
## Install Postgres Driver in Backend Application && Connect Gitpod to RDS Instance

  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/lib/db.py#L1
  
  ![image](https://user-images.githubusercontent.com/97846441/226717684-429eadb1-d971-4229-a23d-a4f5836f02f1.png)

  ![image](https://user-images.githubusercontent.com/97846441/226717757-ce1e7bce-1960-4d98-bcc8-061356eb11a7.png)

  ![image](https://user-images.githubusercontent.com/97846441/226717951-28b9646b-32fe-4f40-aaf8-89e33ceeeef4.png)
  
  
## Create Congito Trigger to insert user into database

  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/aws/lambdas/cruddur-post-confirmation.py#L1
  
  

## Create new activities with a database insert

  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/services/home_activities.py#L9

  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/services/create_activity.py#L53
  
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/app.py#L74
  
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/2cedd058e1982ed7e4020c97b15ae6e3ac99fde3/backend-flask/lib/db.py#L38


Below are notes self
--------------------------------------------------------------
There's a difference between running postgres local and remote. 
The if else statements in the bash scripts state whether or not to run locally or on prod

Whenever you spin up a new workspace, be sure to run the following bash scripts:
 -db/drop
 -db/create
 -db/schema-load
 -db/seed

The drop is going to drop any database running locally.
The create is going to create a brand new DB locally.
The schema-load is going to load the schemas set in schema.sql
The seed is going to seed data coming from seed.sql

