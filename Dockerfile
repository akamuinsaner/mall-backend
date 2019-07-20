FROM node:8.11.3-alpine

COPY . /root/app/

WORKDIR /root/app

RUN npm install &&\
    chmod 755 start.sh

EXPOSE 7000

ENTRYPOINT ["/root/app/start.sh"]
