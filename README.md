# SoftwareDeploymentUebung
In the 5th and final to create containerized DevOps pipeline which can deploy a Node.js app into an azure kubernetes service.
The pipeline will be triggered after pushing to git and execute the following tasks:
- Build a docker image
- Store the image in a registry
- Deploy the image to AKS and provide the application with a public ip 

# Prerequisites
In order to create the pipeline, the first step was to create a simple demo Node.js application. After that a AKS cluster was created in the azure portal with the help of the [microsoft quickstart tutorial](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli).

# Creating the pipeline
