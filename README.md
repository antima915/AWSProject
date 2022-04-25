# AWSProject

**AWS Services APP With Flask, Boto3 and React**

**FLASK AND BOTO3**

> INSTALLATION
 ```
 pip install flask
 ```
 ```
 pip install flask-cors
 ```
 ```
 pip install boto3
 ```

**Functions for AWS Services**
- **EC2**

  1.  **create_key_pair(KeyName = name)**
  - For creating a new Key Pair
  - This function will take a input for the name you want to have for your Key Value pair and then it will make the .pem file in the “/tmp/<filename>” location.

  2. **run_instances(data)**
  - For creating a brand new Instance -
  - Following parameters will be passed to this function -
    - AMI(Amazon Machine Image) ID (eg- ami-0f9fc25dd2506cf6d, Id for Linux Image)
    - Instance Type (eg- t2.micro)
    - Key Value Pair Name (eg- newKey)

  3. **describe_instances(filters)**
  - To Show all the running Instances 
  - It will simpally show the Instance Id, Instance Type, Public IP Address, Private IP Address of all the running Instances.

  4. **stop_instances(id)**
  - To Stop a particular Instance
  - It will take the Instance Id as a parameter and will stop that particluar Instance.

  5. **terminate_instances(id)**
  - To Terminate a particular Instance
  - It will take the Instance Id as a parameter and will Terminate that particluar Instance.

- **S3**

  1. **list_objects(Bucket=bucket)[‘Contents’]**
  - List all the files in a particular Bucket
  - It will take a bucket’s name and will show all the files name of the Bucket.

- **IAM**

  1. **create_user(UserName = name)** 
  - Create a New User 
  On giving a User Name as a Input, this function will make a new User of the given name.

  2. **list_users()**
  - List all the Users
  - All the IAM Users created on a account will be shown.

  3. **get_user(UserName = name)**
  - Show Information of a User
  - On giving a particular User’s name, it will return the information of User about the date of creation, its path and name etc.

  4. **delete_user(UserName = name)**
  - Delete a User 
  - When a user name will be passed to this fucntion, the user will get deleted.

> Boto3
AWS SDK for Python (Boto3) to create, configure, and manage AWS services
The documentation of Boto3
https://boto3.amazonaws.com/v1/documentation/api/latest/index.html


  
  
***For Accessing The Project Using Docker _LOCALLY_***

The DockerHub Images -- 
- Docker image for the [front-end react app](https://hub.docker.com/r/antima915/aws_react)
  ```
  docker pull antima915/aws_react:1.0
  ```
- Docker image for [back-end Flask API](https://hub.docker.com/r/antima915/aws_flask)
  ```
  docker pull antima915/aws_flask
  ```

> FOR LOCAL ENVIRONMENT
- After pulling both the images, run docker containers 
```
sudo docker run -e Access_Key='KEY' -e Access_secret='SECRET_KEY -e Region='REGION' -p 5000:5000 --name <container_name> antima915/aws_flask:1.0
```
   - Here Provide the AWS Credentials in Acess_Key, Access_secret,Region and give the container name.

- Just like this make other container for React
```
sudo docker run -it --name <container_name> -p 3000:3000 antima915/aws_react:1.0
```
   - Give the Container Name

> Now Access the APP At http://localhost:3000
  
 
  
  > FOR Deploying on AWS EC2
  
  - Inside the EC2 Server, install Docker
  - Pull both the Images
  - Make the container using commands --
  ```
  sudo docker run -e Access_Key='KEY' -e Access_secret='SECRET_KEY -e Region='REGION' -p 5000:5000 --name <container_name> antima915/aws_flask:1.0
  ```
  ```
  sudo docker run -it --name <container_name> -p 3000:3000 antima915/aws_react:1.0
  ```
  
  - Go Inside your Docker Container of React App and in the UserService.js file inside the src/Components/ folder, change the Localhost with the Public IP Address of the Running Instance.
  
  > Access the APP At http://public_ip:3000
  

