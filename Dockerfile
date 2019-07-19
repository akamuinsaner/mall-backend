FROM node:8.11.3-alpine

# npm install
COPY package.json /root/app/
COPY package-lock.json /root/app/
WORKDIR /root/app
RUN npm install

# copy files
COPY . /root/app/

RUN chmod 755 start.sh

# expose port
EXPOSE 7000

ENTRYPOINT ["/root/app/start.sh"]
