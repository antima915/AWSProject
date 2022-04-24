import UserService from "../Services/UserService";

const CreateInst = () =>{

    var ImageName='';
    var TypeName='';
    var KeyName='';
    
    function ImageChange(event){
        ImageName =event.target.value
    }
    function TypeChange(event){
        TypeName =event.target.value
    }
    function KeyChange(event){
        KeyName =event.target.value
    }
    
    function InstHandler(event) {
        event.preventDefault();
        UserService.ec2_create_inst(
            {"ImageId" : ImageName,
            "InstanceType" : TypeName,
            "KeyName" : KeyName})
        .then((res) => {
            if(res.data!==''){
                console.log(res.data)
                alert("Instance Created")
            }
            else{
                console.log("No Data")
            }
        })
    }
    return(
        <div className="container">
            <h1>Create a New EC2 Instance</h1>
            <p>Enter Name of the Key Pair you want to make</p>
            
            <form className="form-inline" onSubmit={InstHandler}>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="imgId">AMI(Amazon Machine Image) ID</label>
                    <input type="text" className="form-control" id="imgId" placeholder="Enter AMI ID" onChange={ImageChange}required />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="type">Instance Type</label>
                    <input type="text" className="form-control" id="type" placeholder="eg-t2.micro" onChange={TypeChange}required />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="key">Key Name</label>
                    <input type="text" className="form-control" id="key" placeholder="Key Value Pair Name" onChange={KeyChange}required />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Create Instance</button>
            </form>
        </div>
    );
}

export default CreateInst;