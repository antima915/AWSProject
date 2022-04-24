import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to="/" className="nav">AWS Services</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/ec2" className="nav-link"> EC2 Instance</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/s3" className="nav-link"> S3 Bucket</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='iam' className="nav-link"> IAM User</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
}

export default Header;