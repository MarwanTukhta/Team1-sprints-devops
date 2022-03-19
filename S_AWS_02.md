1. Create VPC
![image](https://user-images.githubusercontent.com/56633651/159127200-940c7165-aaca-4a8b-9510-a143bc1b0d39.png)

2. Create 2 subnets (pub, private)
![image](https://user-images.githubusercontent.com/56633651/159127207-10ec0ece-1326-46a5-b79b-1f0d80636e39.png)

3. Create IGW, RT, NAT GW
![image](https://user-images.githubusercontent.com/56633651/159127263-232eaebd-abc9-472b-ad50-c281a4c97c37.png)
![image](https://user-images.githubusercontent.com/56633651/159127271-df49877d-570e-4099-addf-606f4a7a0110.png)
![image](https://user-images.githubusercontent.com/56633651/159127280-b02e3d88-ccfd-41cb-bf31-5d6ec909834b.png)

4. Create 2 SGs (public_sg, private_sg)
![image](https://user-images.githubusercontent.com/56633651/159127291-23768dc8-1767-4f40-8b53-02a27689391e.png)
![image](https://user-images.githubusercontent.com/56633651/159127301-9b5a7952-c5a2-4df9-adac-e2501412939a.png)

5. Create 2 instances (one in pub, one in private), and attach them to SG (public_sg, private_sg) in sequence.
![image](https://user-images.githubusercontent.com/56633651/159127314-c53b2d95-3bd3-4015-954b-3d775fd81726.png)
![image](https://user-images.githubusercontent.com/56633651/159127328-7178d749-1a31-43c4-af93-73a8c23d75dc.png)
![image](https://user-images.githubusercontent.com/56633651/159127353-2b4fb98e-ed86-4fdf-a632-78f980efb6de.png)
![image](https://user-images.githubusercontent.com/56633651/159127363-295ac5e0-c7fc-4e42-8671-7a40879b9b11.png)

6. Connect to your public EC2 from your local server
```
marwantukhta@Marwans-MacBook-Pro downloads % ssh "key.pem" ec2-user@54.209.7.113 
The authenticity of host '54.209.7.113 (54.209.7.113)' can't be established. 
ED25519 key fingerprint is SHA256:RiztU2v/Vjp3ToVYb6ZtkO3c1LDUs0IuCv1(7KK7Z+wM. This key is not known by any other names 
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes 
Warning: Permanently added '54.209.7.113' (ED25519) to the list of known hosts. 
__I_ ) _1 ( / Amazon Linux 2 AMI ___1\___1___1 
https://aws.amazon.com/amazon-linux-2/ 
-bash: warning: setlocale: LC_CTYPE: cannot change locale (UTF-8): No such file or directory 
[ec2-user@ip-192-168-74-192 ~]$ 
```
7. Connect to private server from public server
```
[ec2-user@ip-192-168-74-192 ~]$ ec2-user@192.128.188
__I_ ) _1 ( / Amazon Linux 2 AMI ___1\___1___1 
https://aws.amazon.com/amazon-linux-2/ 
[ec2-user@ip-192-168-128-188 ~]$
```
