
## Instructions to get started with Tejas Backend:

1. Install Python on your system. Version:3.8+. Make sure Python is installed on PATH environment variable so that python can be run from cmd.
2. Verify if python is installed on cmd by opening cmd and typing ``python --v``
3. If python is verified on cmd, then create a virtual environment as follows: ``python -m venv <name/path of virtual environment>``. This creates a folder with specified name in the specified path or in the current directory of cmd depending on the argument.
4. To activate the virtual environent type: ``<Name/Path of VE>\Scripts\activate``
5. After activation, to install the backend type: ``pip install webssh_embedded``. This should install the backend with required packages.
6. Then, to run the backend, type: ``wssh --xsrf=False``
7. To verify if backend is running go to browser and type: ``127.0.0.1:8888/static/js/iframetest.html``.
8. Form will appear to enter SSH credentials of remote machine. REMOTE MACHINE MUST BE LINUX BASED AND MUST HAVE SSH SERVICE RUNNING. (To run ssh service in Linux install openssh server and start the service

Eg. In Ubuntu, Debian etc; ``sudo apt-get install openssh-server`` and ``sudo service ssh start``)After submitting them, terminal should appear. Now commands can be typed in text input.

9. To look at the complete application, install nodejs. Then clone this repository.
10. Run npm install in the cloned repo. If that didnt work out use npm install --force
11. Run npm start to start the app.
12. Enter the following credentials inside the "" of credentials.json present in Components folder of the app for direct access. If left blank, the form appears to enter the credentials.

Hostname: Remote machine IP(or name in case it is a known host).

username: remote machine username

password: remote machine password

# Instructions to get started with Shreyas Backend:

This is a React Typescript Nodejs program combination, wherein the frontend sends the commands to backend Nodejs program and returns the results of the command execution to the front end. This uses the websocket programming as a two way communication between the server and the client.

The two files used for communication are Terminal.tsx (Frontend part, available under /src/components) and Server.ts (Available in the folder Shreyasbackend). Install Visual Studio code editor for amendments(Optional)

Steps for installation of backend server:

1. Create a separate directory for backend(Shreyasbackend) and run the following commands to install nodejs dependencies
2. sudo apt update && upgrade
3. sudo apt install nodejs (Tested with Nodejs version v18.7.0)
4. sudo apt install npm (Tested with npm version 9.4.2)
5. npm install express 
6. npm install cors
7. npm install http
8. npm install ws
9. npm install child_process
10. npm install nodemon --save-dev
11. npm install mongodb
12. npm install mongoose
13. After installation, using an editor check whether package.json contains the following code part (Add the "dev" part, if not available).
 "scripts": {
    "start": "node server.ts",
    "dev": "nodemon server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
14. run the server side using the command (npm run dev) and from the client side(npm start)

The above commands are also available as script file i.e., steps.sh (in the folder Shreyasbackend).

15. This project has an extension to database connectivity. The commands along with status are being stored in mongodb (This project uses Mongodb community edition{version 5.0.14} with default port(27017) and a database with name "tesdb" and collection name as "datas". Aditionally, one can also install MongoDB compass as a frontend tool for database operations). At present, the connectivity to database is removed in server.ts file. Soon, it would be added along with the pie chart representation for data analytics.

# Instructions to get started with Frontend:



1. When the play button is clicked the icon turns to green or red according to status. But, icons that are already executed also gets turned into current icon.(Working on it)
