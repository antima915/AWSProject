import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateInst from './Components/EC2/CreateInst';
import CreateKey from './Components/EC2/CreateKey';
import Ec2 from './Components/EC2/Ec2';
import RunInst from './Components/EC2/RunInst';
import StopInst from './Components/EC2/StopInst';
import TerminateInst from './Components/EC2/TerminateInst';
import Header from './Components/Header/Header';
import AllUser from './Components/IAM/AllUser';
import CreateUser from './Components/IAM/CreateUser';
import DeleteUser from './Components/IAM/DeleteUser';
import DescribeUser from './Components/IAM/DescribeUser';
import Iam from './Components/IAM/Iam';
import Main from './Components/Main/Main';
import S3 from './Components/S3/S3';
import StorageList from './Components/S3/StorageList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ec2" element = {<Ec2/>} />
        <Route path="/ec2/create_key" element = {<CreateKey/>} />
        <Route path="/ec2/create_inst" element = {<CreateInst/>} />
        <Route path="/ec2/run_inst" element = {<RunInst/>} />
        <Route path="/ec2/stop_inst" element = {<StopInst/>} />
        <Route path="/ec2/terminate_inst" element = {<TerminateInst/>} />

        <Route path="/s3" element = {<S3/>} />
        <Route path="/s3/storage" element = {<StorageList/>} />

        <Route path="/iam" element = {<Iam/>} />
        <Route path="/iam/create" element = {<CreateUser/>} />
        <Route path="/iam/all" element = {<AllUser/>} />
        <Route path="/iam/describe" element = {<DescribeUser/>} />
        <Route path="/iam/delete" element = {<DeleteUser/>} />
        
      </Routes>
    </div>
  );
}

export default App;
