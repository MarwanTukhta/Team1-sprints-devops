# S_AWS_01
1. Create AWS account
![image](https://user-images.githubusercontent.com/56633651/159126320-9ef12094-e22f-4631-9b52-c531f537ddb5.png)
2. Create 2 IAM Groups, Create 2 users one for each group with different permissions
![Screenshot 2022-03-19 180220](https://user-images.githubusercontent.com/56633651/159126470-377bf317-dee1-4f16-9c30-dba9df19da9b.png)
![image](https://user-images.githubusercontent.com/56633651/159126478-785079a4-ee12-447b-bbeb-4dd47af97f2c.png)
![Screenshot 2022-03-19 180458](https://user-images.githubusercontent.com/56633651/159126530-8dc6a538-5398-40ae-b528-b485d8ad4b0a.png)
![image](https://user-images.githubusercontent.com/56633651/159126538-c282a517-b0dd-426f-b1f7-7de29fd867be.png)
4. Create EC2 instance with the given script in user data and try to access it from web browser.
![image](https://user-images.githubusercontent.com/56633651/159126573-9c0f619a-169f-4975-829c-212ba7865ddc.png)
![image](https://user-images.githubusercontent.com/56633651/159126585-d056dc63-c96a-4753-82ac-585c3f72e607.png)
5. Conect to your EC2 in (task 4) and download your static website (from github or local device) then add it to root directory of the apache server then access your website from your browser.
![Screenshot 2022-03-19 181024](https://user-images.githubusercontent.com/56633651/159126897-2ec55125-3e49-4616-bfc0-180f73cc4d75.png)
6. Create 3 SG:
    - web_sg and allow http requests from all to be access publicly.
        ![image](https://user-images.githubusercontent.com/56633651/159126928-c2b90aca-d1ba-47f6-a0cb-3921d130c704.png)
    - app_sg and allow http requests only from SGs (web_app and db_app).
        ![image](https://user-images.githubusercontent.com/56633651/159126943-3aa4d0c9-5b38-495a-b7ab-977d3dcb700b.png)
    - db_sg and allow http requests only from SG(web_app) on port 3306.
        ![image](https://user-images.githubusercontent.com/56633651/159126955-84a358d7-bf6e-4e50-8718-7c8c51837680.png)
7. Create 3 EC2 with one tag (Name) for each one (web_server, app_server, db_server) and attached each server with its respective SG.
![image](https://user-images.githubusercontent.com/56633651/159126981-c7d5dc9d-7ab7-409f-8cd7-feb66c8da056.png)
![image](https://user-images.githubusercontent.com/56633651/159126990-c40d19db-7a84-42c2-91da-2c5ecbdc9d60.png)
![image](https://user-images.githubusercontent.com/56633651/159127000-d35ac8dd-76f0-4487-8246-104334df0360.png)
