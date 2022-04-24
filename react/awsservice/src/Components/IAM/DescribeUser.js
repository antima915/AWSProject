import { useState } from "react";
import UserService from "../Services/UserService";

const DescribeUser = () =>{

    var UserName='';
    const [items,setItems] = useState([]);

    function UserChange(event){
        UserName =event.target.value
    }
    
    function UserHandler(event) {
        event.preventDefault();
        UserService.iam_describe({"user" : UserName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data.User)
                var details = Object.values(res.data.User)
                setItems(details)
            }
            else{
                console.log("No Data")
            }
        })
        .catch(err => alert('User not Found'))
    }
    return(
        <div className="container">
            <h1>Show Information of a User</h1>
            <p>Enter name of User</p>
            <form className="form-inline" onSubmit={UserHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" onChange={UserChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Show User</button>
            </form>
            <div className="row">
                <div className="col-sm-6">
                    <ul>
                        <li>Arn</li>
                        <li>Create Date</li>
                        <li>Path</li>
                        <li>User Id</li>
                        <li>User Name</li>
                    </ul>
                </div>
                <div className="col-sm-6">

                <ul>
                {items.map( (user,index) => (
                    <li key={index}>
                        {user}
                    </li>
                    
                    ))}
                </ul>
                    </div>
                </div>
        </div>
    );
}

export default DescribeUser;