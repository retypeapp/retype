---
icon: /static/logos/docker.svg
tags:
  - guide
  - hosting
---
# Docker

Using a docker container has numerous advantages, including:

- Effortless deployments on [Heroku](https://devcenter.heroku.com/categories/deploying-with-docker), [Amazon ECS](https://docs.docker.com/cloud/ecs-integration/), or [Google Cloud Engine](https://cloud.google.com/compute/docs/containers)
- Highly secure yet highly scalable to meet any hosting requirements
- Portability which allows for moving hosting environments efficiently

## Step 1: Add a `Dockerfile` to your project

First step is to create a Dockerfile in your project.

The following sample `Dockerfile` will build the Retype project and create a `httpd` image based container as the output.

```dockerfile # Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS builder
WORKDIR /build
COPY . /build
RUN dotnet tool install retypeapp --tool-path /bin
RUN retype build --output .docker-build/

FROM httpd:latest
COPY --from=builder /build/.docker-build/ /usr/local/apache2/htdocs/
```

## Step 2: Build the image

!!!
Most cloud platforms can build the image on their own. See their corresponding documentation for more information.
!!!

After creating the Dockerfile you can use your local Docker instance to build the image with the following command:

```bash #
docker build -t myorg/myapplication:latest .
```

To confirm that the build worked, run the container locally with:

```bash #
docker run --rm -p 8080:80 myorg/myapplication:latest
```

You should be able to now open a web browser and browse to your IP address on port `8080`. If running locally, [localhost:8080](http://localhost:8080) should work.

## Step 3: Publish the Image

After building your docker container, you can publish the container to any free-to-use repository such as [Docker Hub](https://hub.docker.com/). See the Docker Hub [docs](https://docs.docker.com/docker-hub/) for more details.
