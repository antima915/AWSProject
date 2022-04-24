import UserService from "../Services/UserService";

const DeleteUser = () =>{

    var userName='';
    
    function UserChange(event){
        userName =event.target.value
    }
    
    function UserHandler(event) {
        event.preventDefault();
        UserService.iam_delete({"user" : userName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                alert("User Deleted")
            }
            else{
                alert("No User Detected")
            }
        })
        .catch(err => alert('User not Found'))
    }
    return(
        <div className="container">
            <h1>Delete a  User</h1>
            <p>Enter Name of the User to Delete</p>
            <form className="form-inline" onSubmit={UserHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" onChange={UserChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Delete User</button>
            </form>
        </div>
    );
}

export default DeleteUser;