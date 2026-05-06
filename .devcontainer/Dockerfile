ARG VARIANT
ARG MICROSOFT_BASE_IMAGE

FROM ${MICROSOFT_BASE_IMAGE} AS base_image
FROM retypeapp/retype:${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US \
    LC_ALL=C

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git \
        less \
        vim \
        locales \
        bash-completion \
        openssh-client \
    && \
        apt-get clean \
    && \
        locale-gen --purge en_US.UTF-8 \
    && \
        groupadd -rg 1000 vscode && \
        useradd -rms /bin/bash -u 1000 -g vscode vscode && \
        chown -R vscode:vscode /usr/bin/retype

USER vscode
WORKDIR /home/vscode

# Copy Microsoft's .bashrc from their devcontainer base image,
# making the terminal look like an official one
COPY --chown=vscode:vscode --from=base_image /home/vscode/.bashrc /home/vscode/.bashrc
