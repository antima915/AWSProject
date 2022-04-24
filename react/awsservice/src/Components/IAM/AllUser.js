import { useEffect, useState } from "react";
import UserService from "../Services/UserService";

const AllUser = () =>{
    const [items,setItems] = useState([]);

    useEffect ( () => {

        UserService.iam_all()
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
                    <th>User Name</th>
                    
                </tr>
            </thead>
            <tbody>
            {items.map( (user,index) => (

                <tr key={index}>
                <td>{user}</td>
                
                </tr>
                ))}

            </tbody>
        </table>
    </div>
    );
}

export default AllUser;