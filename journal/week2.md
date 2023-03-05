# Week 2 — Distributed Tracing


## Required Homework

 ### AWS Xray
  Successfully sending segment batches - 
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/ff8321440367cee6f4290c5947e23ed1e95a7128/backend-flask/app.py#L27
  
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/ff8321440367cee6f4290c5947e23ed1e95a7128/backend-flask/services/home_activities.py#L4
  
  ![image](https://user-images.githubusercontent.com/97846441/222874732-80f3cded-9526-4d4f-b1a5-3bc422f4637f.png)
  ![image](https://user-images.githubusercontent.com/97846441/222874832-205b5549-b8c5-4560-b9b3-95cdfcc0e10c.png)
  
 
 ### Cloud Watch logs
  Successfully implemented cloud watch logs - turned it ( and aws XRAY) off to be cost-conscience
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/dba5635e9bf2d3259609ac24e09e6e2a88ac987f/backend-flask/app.py#L35
  
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/dba5635e9bf2d3259609ac24e09e6e2a88ac987f/backend-flask/services/home_activities.py#L8 - I passed in logger, but removed to make sure there aren't any cloudwatch log costs is occuring 
  
  
  ![image](https://user-images.githubusercontent.com/97846441/222877909-31319718-6ef3-4900-9dd3-821fd10f92c2.png)

 ### Rollbar implementation
  Successfully implemented Rollbar watch logs
  https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/00e6b8998d8bd5ffe67000f226386c468939a1e9/backend-flask/app.py#L35
  
  ![image](https://user-images.githubusercontent.com/97846441/222880004-cdf6f8ea-8a04-4a84-9e3f-ba4c87458cb3.png)
  
  
 ### Honeycomb.io instrumentation, succesful -
 https://github.com/Ecce0/aws-bootcamp-cruddur-2023/blob/a8a367287c83e14c038d04b944d30c039dbcebe4/backend-flask/app.py#L18
 
 ![image](https://user-images.githubusercontent.com/97846441/222934702-d60e2c54-f238-453a-9956-12a85d2f4655.png)


  
  --------------------------------------------------------------------------------------
  ## Below are study notes for self
  
   ### Observability -
   
   "Observability is a system that enables you to understand what’s really happening in your software, from the outside. An observable system
   provides all the information you need in real time to address the day-to-day questions you might have about a system. It also enables you to 
   navigate from effect to cause whenever the system develops a fault." 
   
   ![image](https://user-images.githubusercontent.com/97846441/222934834-41ad7085-e6ee-46cc-9736-b95abc99b204.png)
   
   ![image](https://user-images.githubusercontent.com/97846441/222934856-b7950e71-d7b7-4b35-9737-f45d0a0be030.png)
 
   #### Logs
   Logs are structured and unstructured lines of text a system produces when certain codes run. In general, you can think of a 
   log as a record of an event that happened within an application.
   
   #### Trace
   A trace represents the entire journey of a request or action as it moves through all the nodes of a distributed system.
   
   #### Metrics
   Metrics are a numerical representation of data that can be used to determine a service or component’s overall behavior over time. 

   https://iamondemand.com/blog/the-3-pillars-of-system-observability-logs-metrics-and-tracing/#:~:text=To%20view%20and%20understand%20the,nodes%20of%20a%20distributed%20system.
   
   
   ### OpenTelemetry
   ![image](https://user-images.githubusercontent.com/97846441/222934979-a505f556-b8c1-4ef5-8fd0-a27e93c10293.png)
   
   
  
   #### AWS Xray
   ![image](https://user-images.githubusercontent.com/97846441/222934760-8ccc96c1-bb5e-467d-9acc-428d3b262e28.png)


