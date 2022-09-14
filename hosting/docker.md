---
icon: container
order: 90
---

![](/static/headers/hosting_github-pages.png)

# Docker

Creating and using a Dockerfile for your Retype built website is free (as long as you can host a Docker-Container) and simple.

Using a docker container has various advantages:

- easy deployments on [Heroku](https://devcenter.heroku.com/categories/deploying-with-docker)
- easy deployments on [Amazon ECS](https://docs.docker.com/cloud/ecs-integration/)
- easy deployments on [Google Cloud Engine (GCE)](https://cloud.google.com/compute/docs/containers)

## Step 1: Add a `Dockerfile` to your project :open_file_folder:

First of all, you have to create a Dockerfile in your project.
We got a default Dockerfile which uses `dotnet` to built the application and create a `httpd` Image based container as the final result.

```dockerfile # Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS builder
WORKDIR /build
COPY . /build
RUN dotnet tool install retypeapp --tool-path /bin
RUN retype build --output .docker-build/

FROM httpd:latest
COPY --from=builder /build/.docker-build/ /usr/local/apache2/htdocs/
```

## Step 2: Build the Image :hammer_and_wrench:

!!!info
Most cloud platforms can build the image on their own. See the corresponding documentation for more information.
!!!

After creating the Dockerfile you can use your local Docker instance to build the image with the following command:

```bash #
docker build -t myorg/myapplication:latest .
```

To check if the build worked, you can just run the container locally with:

```bash #
docker run --rm -p 8080:80 myorg/myapplication:latest
```

And open a browser on your IP address and port 8080. (if running locally, [localhost:8080](http://localhost:8080) should work :smirk:)

## Step 3: Publish the Image :ship:

After building your docker container, you can publish it to any free-to-use repository like [dockerhub](https://dockerhub.com/).
A documentation for this can be found [here](https://docs.docker.com/docker-hub/).
