FROM alpine
WORKDIR /app
RUN apk add --update nodejs npm
COPY ./package.json /app
RUN npm install

# ENV DB_URL="mongodb://172.17.0.2:27017/DockerDemo" \
#     PORT="3000" \
#     NODE_ENV="production"

COPY . /app/
CMD ["npm","start"]