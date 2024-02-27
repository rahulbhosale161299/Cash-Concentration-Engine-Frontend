import { Link } from "react-router-dom";
import '../css/loginpages.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react'; 
import bank from '../assets/banking-and-finance-1.jpg';
export default function LoginPages() {
    return (
      
        <div img src={bank} alt ="this is image">
         <div className="Auth-form-container  " >
        <div className='box '
         style={{border:'solid' ,alignProperty:'center ', 
         width: '27vw',height:'16vw',background :'white' }}  >

          
       
       <br/>
       <Link to="logindistricts" className="btn btn-warning ">Login For District</Link>{' '}<br/><br/>
       <Link to="loginstate" className="btn btn-primary">Login For State</Link>{' '}<br/><br/>
       <Link to="logincountry" className="btn btn-success">Login For Country</Link>{' '}
       
       </div>
       </div>
       </div>
       
      
    );
  }