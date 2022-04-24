import axios from 'axios'
const USER_BASE_URL = 'http://127.0.0.1:5000';

const headers = {
    "Content-Type": 'application/json'
}

class UserService{
    
    // EC2 INSTANCES 

    ec2_create_key(name){
        return axios.post(USER_BASE_URL + '/ec2/create_key',name,headers)
    }
    
    ec2_create_inst(data){
        return axios.post(USER_BASE_URL + '/ec2/create_inst',data,headers)
    }
    
    ec2_run_inst(){
        return axios.get(USER_BASE_URL + '/ec2/run_inst',headers)
    }

    ec2_stop_inst(data){
        return axios.post(USER_BASE_URL + '/ec2/stop_inst',data,headers)
    }

    ec2_terminate_inst(data){
        return axios.post(USER_BASE_URL + '/ec2/terminate_inst',data,headers)
    }

    // S3 BUCKET

    s3_storage(data){
        return axios.post(USER_BASE_URL + '/s3/storage',data,headers)
    }

    // IAM 
    
    iam_create(data){
        return axios.post(USER_BASE_URL + '/iam/create',data,headers)
    }

    iam_all(){
        return axios.get(USER_BASE_URL + '/iam/all',headers)
    }

    iam_describe(data){
        return axios.post(USER_BASE_URL + '/iam/describe',data,headers)
    }

    iam_delete(data){
        return axios.post(USER_BASE_URL + '/iam/delete',data,headers)
    }


}

export default new UserService();