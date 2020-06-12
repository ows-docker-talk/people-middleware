FROM ubuntu

WORKDIR /usr/app

RUN apt-get update -y && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
COPY . .
RUN npm i
EXPOSE 3001
CMD [ "npm", "start" ]