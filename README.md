# SoftwareDeploymentUebung
In the 5th and final to create containerized DevOps pipeline which can deploy a Node.js app into an azure kubernetes service.
The pipeline will be triggered after pushing to git and execute the following tasks:
- Build a docker image
- Store the image in a registry
- deploy the image to AKS and provide the application with a public ip 
