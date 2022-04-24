import { useEffect, useState } from "react";
import UserService from "../Services/UserService";

const RunInst = () =>{
    const [items,setItems] = useState([]);

    useEffect ( () => {

        UserService.ec2_run_inst()
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                var instances = Object.values(res.data);
                setItems(instances)
            }
            else{
                console.log("No Data")
            }
        })
        
    },[])
    return(
        <div className="container">
            <h1>All Running EC2 Instance Information</h1>
            <table className="table table-stiped">
            <thead>
                <tr>
                    <th>Instance ID</th>
                    <th>Private IP Address</th>
                    <th>Public IP Address</th>
                    <th>Instance Type</th>
                </tr>
            </thead>
            <tbody>
            {items.map( (user) => (

            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.private_ip}</td>
            <td>{user.public_ip}</td>
            <td>{user.type}</td>
            
            </tr>
            ))}

            </tbody>
        </table>
    </div>
    );
}

export default RunInst;