import UserService from "../Services/UserService";

const CreateKey = () =>{

    var keyName='';
    
    function keyChange(event){
        keyName =event.target.value
    }
    
    function keyHandler(event) {
        event.preventDefault();
        UserService.ec2_create_key({"name" : keyName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                alert("Key Pair Created")
            }
            else{
                console.log("No Data")
            }
        })
    }
    return(
        <div className="container">
            <h1>Create Key Pair for EC2 Instance</h1>
            <p>Enter Name of the Key Pair you want to make</p>
            <form className="form-inline" onSubmit={keyHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" placeholder="eg-demoKey" onChange={keyChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add Key Pair</button>
            </form>
        </div>
    );
}

export default CreateKey;