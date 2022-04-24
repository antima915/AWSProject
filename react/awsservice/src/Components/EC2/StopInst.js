import UserService from "../Services/UserService";

const StopInst = () =>{

    var IdName='';
    
    function IdChange(event){
        IdName =event.target.value
    }
    
    function IdHandler(event) {
        event.preventDefault();
        UserService.ec2_stop_inst({"id" : IdName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                alert("Instance Stopped")
            }
            else{
                console.log("No Data")
            }
        })
        .catch(err => alert('Instance not Found'))
    }
    return(
        <div className="container">
            <h1>Stop an EC2 Instance</h1>
            <p>Enter ID of the Instance you want to Stop</p>
            <form className="form-inline" onSubmit={IdHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="name" onChange={IdChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Stop Instance</button>
            </form>
        </div>
    );
}

export default StopInst;