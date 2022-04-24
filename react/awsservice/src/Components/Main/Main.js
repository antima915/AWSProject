import "./Main.css"
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className="container">
            <h1>Welcome To AWS Services</h1>
            <div className="main">
            <div className="row">
                
                <div className="col-sm-4">
                    <div className="card">
                        <h5 className="card-header">AWS EC2 Instance</h5>
                        <div className="card-body">
                            <h5 className="card-title">AWS Service</h5>
                            <p className="card-text">Here You can create Key Pairs, create new Instances,stop Instances and many more...</p>
                            <Link to="/ec2" className="btn btn-primary">Go To EC2</Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <h5 className="card-header">AWS S3 Bucket</h5>
                        <div className="card-body">
                            <h5 className="card-title">AWS Service</h5>
                            <p className="card-text">Here You can see all the files in a Bucket of your choice...</p>
                            <Link to="/s3" className="btn btn-primary">Go To S3</Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <h5 className="card-header">AWS IAM</h5>
                        <div className="card-body">
                            <h5 className="card-title">AWS Service</h5>
                            <p className="card-text">Here You can create new User, see all Users and many more...</p>
                            <Link to="/iam" className="btn btn-primary">Go To IAM</Link>
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </div>
    );
}

export default Main;