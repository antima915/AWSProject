import { useState } from "react";
import UserService from "../Services/UserService";

const StorageList = () =>{
    const [Items,setItems] = useState([]);
    
    var bucketName='';
    var list = {}
    function BucketChange(event){
        bucketName = event.target.value
    }
    
    function BucketHandler(event) {
        event.preventDefault();
        UserService.s3_storage({"bucket" : bucketName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                list = res.data
                var itemsList = Object.values(list);
                setItems(itemsList)
                // alert("Instance Stopped")
            }
            else{
                console.log("No Data")
            }
        })
        .catch(err => alert('Bucket not Found'))
    }
    return(
        <div className="container">
            <h1>List all the files of Bucket</h1>
            <p>Enter Name of the Bucket</p>
            <form className="form-inline" onSubmit={BucketHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" onChange={BucketChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">See Files</button>
            </form>
            <ul>

            {Items.map((item, index) => (  
                <li key="{index}">  
                    {item}  
                </li>  
            ))}
            </ul>
        </div>
    );
}

export default StorageList;