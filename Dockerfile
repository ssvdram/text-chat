FROM node:6.11-wheezy

#Step 2
LABEL version="1.0"
LABEL description="This is Simple Text Chat Server Docker Image"
LABEL maintainer "Sai Ramamoorthy<sairam@yahoo.com>"

#Step 3.
RUN mkdir -p /textchat
WORKDIR /textchat


#ENV PORT=3002

#Step 4.
COPY ["package.json", "./"]

#Step 5.
#ENV NODE_ENV production

#Step 6..
#RUN yarn global add forever #At least for now

#Step 7
#RUN cd /app && yarn
RUN cd /textchat 


#Step 8
COPY . .

#Step 9.
EXPOSE 3002

#Step 10.
CMD ["node", "index.js"]

