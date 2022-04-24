import {Link} from "react-router-dom"

const Iam = () => {
    return(
        <div className="container">
            <h1>Amazon IAM Service</h1>
            <p>Select from the following Options:</p>
            <div className=""></div>
            <div className="list-group">
                <Link to='/iam/create' className="list-group-item list-group-item-action list-group-item-success">
                    Create User
                </Link>
                <Link to='/iam/all' className="list-group-item list-group-item-action list-group-item-success">Show All Users</Link>
                <Link to='/iam/describe' className="list-group-item list-group-item-action list-group-item-success">Describe User Information</Link>
                <Link to='/iam/delete' className="list-group-item list-group-item-action list-group-item-success">Delete User</Link>
            </div>
        </div>
    );
}

export default Iam;