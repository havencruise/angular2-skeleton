# Provides an environment to run an Angular2 app in a docker container
#
# To build and run with Docker:
#
#  $ docker build -t my-angular2-app .
#  $ docker run -it --rm -v $PWD/src:/app/src \
#        --name appserver -p 3000:3000 -p 3001:3001 \
#        my-angular2-app bash -c "cd /app && npm start:docker"
#

FROM ubuntu:14.04
RUN apt-get update -y
RUN apt-get install -y curl > /dev/null 2>&1
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs > /dev/null 2>&1
RUN mkdir -p /app /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /app
COPY package.json typings.json tslint.json tsconfig.json karma.conf.js ./config /app/
RUN npm install --unsafe-perm=true && npm run typings install
