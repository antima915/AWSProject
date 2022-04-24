import boto3
import os

# -------- EC2 INSTANCES ---------

# Create Key Value Pair
def create_key_pair(name):
    ec2_client = boto3.client("ec2", region_name="us-east-1")
    key_pair = ec2_client.create_key_pair(KeyName=name)

    private_key = key_pair["KeyMaterial"]
    result = "/tmp/" + name + ".pem"
    # write private key to file with 400 permissions
    with os.fdopen(os.open(result, os.O_WRONLY | os.O_CREAT, 0o400), "w+") as handle:
        handle.write(private_key)

# Create a New Instance
def create_instance(data):
    ec2_client = boto3.client("ec2", region_name="us-east-1")
    instances = ec2_client.run_instances(
        ImageId=data['ImageId'],
        MinCount=1,
        MaxCount=1,
        InstanceType=data['InstanceType'],
        KeyName=data['KeyName']
    )

    return(instances["Instances"][0]["InstanceId"])


# Get the Running Instances
def get_running_instances():
    ec2_client = boto3.client("ec2", region_name="us-east-1")
    reservations = ec2_client.describe_instances(Filters=[
        {
            "Name": "instance-state-name",
            "Values": ["running"],
        }
    ]).get("Reservations")

    data = {}
    i=0
    for reservation in reservations:
        for instance in reservation["Instances"]:
            
            instance_id = instance["InstanceId"]
            instance_type = instance["InstanceType"]
            public_ip = instance["PublicIpAddress"]
            private_ip = instance["PrivateIpAddress"]
            i=i+1
            data = {**data,
                i:{
                    "id":instance_id,
                    "type":instance_type,
                    "public_ip":public_ip,
                    "private_ip":private_ip
                }
            }
            
    return data

# Stop Instance of Given ID
def stop_instance(instance_id):
    ec2_client = boto3.client("ec2", region_name="us-east-1")
    response = ec2_client.stop_instances(InstanceIds=[instance_id])
    print(response)

# Terminate Instance of Given ID
def terminate_instance(instance_id):
    ec2_client = boto3.client("ec2", region_name="us-east-1")
    response = ec2_client.terminate_instances(InstanceIds=[instance_id])
    print(response)


# ------- S3 BUCKET ------- 

# List all files of a Bucket

def list_files(bucket):
    s3 = boto3.client('s3')
    contents = {}
    i=0
    for item in s3.list_objects(Bucket=bucket)['Contents']:
        i=i+1
        contents = {**contents,i:item['Key']}

    return contents

# -------- IAM --------

# Create a New User
def create_user(name):
    client = boto3.client('iam')

    response = client.create_user(
        UserName=name
    )

    print(response)

# Show All Users
def all_user():

    client = boto3.client('iam')

    response = client.list_users()

    users = response['Users']
    all_users = {}
    i=0

    for user in users:
        i=i+1
        all_users = {**all_users, i: user['UserName'] }
        # print(f'  - {user["UserName"]}')
    return all_users


# Show Specific User's Information
def describe_user(name):
    client = boto3.client('iam')

    response = client.get_user(
        UserName=name
    )
    return response

# Delete a User
def delete_user(name):

    client = boto3.client('iam')

    response = client.delete_user(
        UserName=name
    )

    return response