The ISB system can create challenges where docker instances can be spawned for users to use to find the flag. An example of a use-case would be the user needs to SSH into a secure 'server', and instead of having a dedicated server waiting, a docker instance is spawned and the details are given to the specific user. The added benefit to this is that multiple users can attempt the same challenge at the same time (they will be given different docker instances to connect to).

# Creating a Docker Challenge

To create a new challenge that utilises Docker, first create a new challenge and select the Docker option. Give the docker challenge ID a name - should be text - and click Register Challenge.

![[dockerChallengeCreate.png]]


# Configuring the docker instance

In project directory, there will be a `_container_manager_app/containers` directory. Create a new folder in that directory named exactly the same as the Docker Challenge ID used in the previous step.

All the files you need to use to create the container will need to be stored in this new directory. 

Two files you will need to create at least are:
- `docker-compose.yml`, and
- `Dockerfile`

These need to be configured correctly in order to have the containers launch successfully.

## `docker-compose.yml`

The docker compose file needs to be formatted as in this example. Leave the ports field as shown. 

You will *at least* need to change the container name from `sshtest-server` to something that fits the challenge.

```yml
services:
  sshtest-server:
    build: .
    ports:
      - "${PORT}:22" # OUTSIDE:INSIDE
    restart: unless-stopped

```


## Dockerfile

The contents of the Dockerfile will depend on the challenge being created.