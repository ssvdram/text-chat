# text-chat
A websocket based NodeJS served simple text chat server with chat history

This is a websocket based chat server in which multiple chat users can point to the same webpage and chat using a screen name they type in.   This server maintains history as well and upon launching the chat page, the user will see the last 15 lines in the shared chat history.  The entire chat history is also save in another file.

The following notes are important:
- The mechanism of choosing a screen name can be easily modified to use secure credentials, thereby authenticating a chat user.
- The mechanism of saving history and choosing to display last 15 lines of chat history can be easily modified to suit your needs.
- The server runs on a predefined PORT # 3002.  This can be easily changed as well.
- Right now all chat users share the same chat room (i.e. there is only one room).  Multiple chat rooms can be easily created as well.

Please read the README file in the repo for instructions on building and launching the server.

----  The above should do it for a simple install and deployment for demonstration purposes and private use.
----  Of course more work needed to productize the same.

--------------------------------

Here's how to dockerize the same so that it can be deployed as containers and managed with container tools.

Dockerizing the Text Chat Server
- Please see the Dockerfile for instructions
- Execute the additional docker commands to build and run the container
- The management of containers is outside the scope of this demo.


Detailed instructions:
----------------------


Assumption:
 - You have node and npm (node package manager) already installed

1. Issue the following command on the server command line:

   npm install

   (The above will install all the node package dependencies)

2. The following will run the Text Chat Server

   node index.js

   (The server listens on PORT # 3002.  This can be changed in index.js or by setting the PORT environment variable)

3. User can chat by pointing their web browser to:

   http://localhost:3002 or the public hostname by http://www.myservername:3002

---- You can stop here or read further

4. If you want to run this app in a container, please read on.

   [Assumption: Docker environment is already preloaded on your server]
   (Execute the following two commands from the same directry which has the Dockerfile)

   docker build -t textchatv1 .
   
   docker run -d -p 3002:3002 textchatv1

   (the above two commands build the docker image for textchat app as well as run the app which listens on port 3002 of the host as well port 3002 of the container - port mapped)
   (other docker commands and container management is outside the scope of this demo)

