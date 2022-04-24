import { Link } from "react-router-dom";

const Ec2 = () => {
    return(
        <div className="container">
            <h1>Amazon EC2 Instance Service</h1>
            <p>Select from the following Options:</p>
            <div className=""></div>
            <div className="list-group">
                <Link to='/ec2/create_key' className="list-group-item list-group-item-action list-group-item-info">
                    Create Key Pair
                </Link>
                <Link to='/ec2/create_inst' className="list-group-item list-group-item-action list-group-item-info">Create New Instance</Link>
                <Link to='/ec2/run_inst' className="list-group-item list-group-item-action list-group-item-info">Show Running Instance Information</Link>
                <Link to='/ec2/stop_inst' className="list-group-item list-group-item-action list-group-item-info">Stop a Instance</Link>
                <Link to='/ec2/terminate_inst' className="list-group-item list-group-item-action list-group-item-info">Terminate a Instance</Link>
            </div>
        </div>
    );
}

export default Ec2;