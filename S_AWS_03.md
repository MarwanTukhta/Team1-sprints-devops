1. Create Company databases on RDS Mysql and connect to it (create employee table and department table)
    ```
    SHOW TABLES;
    +----------------------------+
    | Tables_in_Company          |
    +----------------------------+
    | department                 |
    | employee                   |
    +----------------------------+
    2 rows in set (0.03 sec)

    ```
2. Create s3 bucket upload files and then expose it publicly (access it from your web browser)
![Screenshot 2022-03-20 095357](https://user-images.githubusercontent.com/56633651/159152302-512d486e-111a-4ffa-9e9f-1f7ff03ca778.png)
![image](https://user-images.githubusercontent.com/56633651/159152552-3133044a-34a9-48b5-839c-08a8154dfd45.png)
3. Create a static website using s3 buckets (access it from your web browser)
![Screenshot 2022-03-20 102545](https://user-images.githubusercontent.com/56633651/159152631-2a97716c-db14-4c23-b73a-7df9cfc834ab.png)
4. Create 2 EC2 (App_server, Web_server)
![image](https://user-images.githubusercontent.com/56633651/159152684-1535cf35-b6c0-4110-87a2-ed673df74d99.png)
5. Create EBS volume then attach it with App_server
![image](https://user-images.githubusercontent.com/56633651/159152697-c248c029-b7eb-4583-824b-2cfe7e2b683f.png)
6. Create Image from App_server then create a new server from created image (Replica_App_server) in a different region
![Screenshot 2022-03-20 103118](https://user-images.githubusercontent.com/56633651/159152756-78560447-ee3f-4f92-8fda-d65fccccb852.png)
7. Create snapshot from created EBS volume in (task4)
![image](https://user-images.githubusercontent.com/56633651/159152774-56112f22-eaa5-4621-ac7a-9acdeaf5b3f7.png)
