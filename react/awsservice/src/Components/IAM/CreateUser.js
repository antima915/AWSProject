import UserService from "../Services/UserService";

const CreateUser = () =>{

    var userName='';
    
    function UserChange(event){
        userName =event.target.value
    }
    
    function UserHandler(event) {
        event.preventDefault();
        UserService.iam_create({"user" : userName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                alert("User Created")
            }
            else{
                console.log("No Data")
            }
        })
    }
    return(
        <div className="container">
            <h1>Create New User</h1>
            <p>Enter Name of the User</p>
            <form className="form-inline" onSubmit={UserHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" onChange={UserChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Create User</button>
            </form>
        </div>
    );
}

export default CreateUser;