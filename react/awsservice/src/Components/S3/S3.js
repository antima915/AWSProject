// import './Ec2.css'
import { Link } from "react-router-dom";

const S3 = () => {
    return(
        <div className="container">
            <h1>Amazon S3 Bucket Service</h1>
            <p>Select from the following Options:</p>
            <div className=""></div>
            <div className="list-group">
                <Link to='/s3/storage' className="list-group-item list-group-item-action list-group-item-warning">Show List of All Files </Link>
            </div>
        </div>
    );
}

export default S3;