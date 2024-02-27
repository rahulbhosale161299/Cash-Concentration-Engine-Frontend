
import React from 'react'
import axios from 'axios';
import '../css/loginpages.css';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LoginCountry=()=> {
    const [logincountry,setlogincountry]=useState(
        {
            userName:"",
            password:""
        } );
        const [errors, setErrors] = useState({
          userName:'',
            password: '',
          });
          const inputChangeHandler=(event)=>{
            setlogincountry({...logincountry,[event.target.name]:event.target.value})
        }
        const Navigate = useNavigate();
        const validateForm = () => {
            const newErrors = {
              userName: '',
              password: '',
            };
        
            let isValid = true;
            if (!logincountry.userName) {
                newErrors.userName = 'Username is required';
                isValid = false;
              }
          
              if (!logincountry.password) {
                newErrors.password = 'Password is required';
                isValid = false;
              }
             
              setErrors(newErrors);
              return isValid;
            };
            const checkData= async (event)=>{
              
                    event.preventDefault();

                    if (validateForm()) {
                        try {
                          const response = await axios.post(`http://localhost:8080/validatelogin?userName=${logincountry.userName}&password=${logincountry.password}`, {
                            userName: logincountry.userName,
                            password: logincountry.password,
                          });
            
                          if (response.status === 200) {
                            Navigate("/logincountry/statedetail")
                            console.log('Sign-in successful');
                            // Redirect or perform other actions upon successful sign-in
                          } else {
                            console.log('Sign-in failed');
                            // Handle sign-in failure, show error message, etc.
                          }
                        } catch (error) {
                          console.error('Error during sign-in:', error);
                          // Handle error, show error message, etc.
                        }
                
                  }    
                }  

    return (
        <div className="Auth-form-container">
        <form className="Auth-form"  >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In for Country</h3>
            <div className="form-group mt-3" style={{textAlign:"left"}}>
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                name="userName"
                onChange={inputChangeHandler} 
               value={logincountry.userName}
                
                autoComplete="off"
              />
{errors.userName && <p className="error">{errors.userName}</p>}
            </div>
            <div className="form-group mt-3" style={{textAlign:"left"}}>
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                onChange={inputChangeHandler}
value={logincountry.password}
                 
                 autoComplete="off"
              />
{errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br/>
            <div >
            
              <Link to="statedetail" className="btn btn-primary" onClick={checkData}>Sign In</Link>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="loginregistration" className="btn btn-success" >Sign Up</Link>{' '}
    
            </div>
           
          </div>
        </form>
    
          
        </div>
    )
}

export default LoginCountry
