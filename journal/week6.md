# Week 6 — Deploying Containers

I had several issues going on during week 6/7 Deploying containers. 

(1) - First, my AWS Cognito configuration continued to give errors regarding Amplify. After several weeks of attempting to debug the error on the front end, I attended an office hours and did some testing with Andrew to find that the process.env wasn't processing with the deployment of the frontend dockerfile. Therefore, I went ahead and hard-coded the values instead of having them as env vars and this helped the error to disappear.

(2) - MY backend task definition contined to fail for a couple of reasons. The first reason was the IAM custome inline role didn't include access to the cloudwatch logs. It was assigned in the IAM role, but wasn't registering in the deployment of the task definitions. My second reason is that the location of the CMD python wasn't set the right location. I needed to change my location to 'backend-flask/bin/health-check'. I had another reason as to why my backend flask task definition continued to fail. 
