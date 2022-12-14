# SoftwareDeploymentUebung
In the 5th and final to create containerized DevOps pipeline which can deploy a Node.js app into an azure kubernetes service.
The pipeline will be triggered after pushing to git and execute the following tasks:
- Build a docker image
- Store the image in a registry
- Deploy the image to AKS and provide the application with a public ip 

## Prerequisites
In order to create the pipeline, the first step was to create a simple demo Node.js application. After that a AKS cluster was created in the azure portal with the help of the [microsoft quickstart tutorial](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli).

## Creating the pipeline
First, we created the pipeline using the pipeline type "Deploy to Azure Kubernetes Service". After that, a dockerfile was created and uploaded to git. Following that, the location of the node.js app in this github repository was added to the yaml file as well. Now the pipeline can be triggered via git and exectued.

The next step was to create a release pipeline. During this process, the only difficulty was figuring out the external address of the kubernetes cluster. But with our knoweldge from the previous labs, this lab was not a struggle. 

## Important links
Image in registry: [akslab5registry.azurecr.io/lab5](akslab5registry.azurecr.io/lab5)

Public endpoint: [http://20.31.127.93:3000/](http://20.31.127.93:3000/)

## Screenshots
Release DevOps pipeline:

![Release Pipeline](./Images/release_pipeline.png "Release Pipeline")


Successful Deployment:

![Deployment](./Images/deployment.png "Deployment")
