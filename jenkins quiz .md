01) What is Jenkins used for?
Jenkins is used to build and test your product continuously, so developers can continuously integrate changes into the build. Jenkins is the most popular open source CI/CD tool on the market today and is used in support of DevOps

02) 

- What is Jenkins agent?
<br/>A Jenkins agent is an executable, residing on a node, that is tasked by the controller to run a job.

- What is Jenkins executor (Build Executor)?
<br/>Allows a build to run on a node/agent

03) Explain Jenkins master-slave architecture?
<br/>The Jenkins master acts to schedule the jobs, assign slaves, and send builds to slaves to execute the 

04) Mention three security mechanisms used by Jenkins to authenticate users?
- Default Mechanism - Choose an internal database to store user data and credentials. 
- Authenticate against a Lightweight Directory Access Protocol (LDAP) server.
- Use the authentication mechanism used by the application server upon which it is deployed.

05) Mention ways that a job can be run/scheduled in Jenkins?
- Peroidically
- Github hook
- After other project is done building

06) How can we restart Jenkins server (Hint it's an endpoint we visit in the browser)?
<br/>visit ${jenkins_url}/restart

07) Install jenkins with docker image.
![Screenshot 2022-03-01 150845](https://user-images.githubusercontent.com/56633651/156166772-8f2f3ff9-095e-4adb-874d-8b08b476f366.png)

08) Install role based authorization plugin.

![Screenshot 2022-03-01 150903](https://user-images.githubusercontent.com/56633651/156166807-b487d791-21c4-4ede-b4b4-b83e607b69de.png)

09) Create new user.
![Screenshot 2022-03-01 150909](https://user-images.githubusercontent.com/56633651/156166821-83d83321-fefa-436f-bb74-60a12a0c7ee2.png)

10) Create read role and assign it to the new user
![Screenshot 2022-03-01 150915](https://user-images.githubusercontent.com/56633651/156166843-0af32967-fd90-4217-98ec-e0b52931a52f.png)
![Screenshot 2022-03-01 150922](https://user-images.githubusercontent.com/56633651/156166863-5812f064-5456-401a-898a-22ba7808a761.png)

11) Create free style project and link it to private git repo(inside it create directory and create file with "hello world").
![Screenshot 2022-03-01 150928](https://user-images.githubusercontent.com/56633651/156166879-18e225eb-c7cd-4c70-83a1-bff8206d6e1b.png)
