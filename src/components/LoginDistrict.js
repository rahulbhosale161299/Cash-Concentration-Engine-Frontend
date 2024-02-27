import React from 'react'
import axios from 'axios';
import '../css/loginpages.css';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LoginDistrict=()=> {
    const [logindistrict,setlogindistrict]=useState(
        {
            userName:"",
            password:""
        } );
        const [errors, setErrors] = useState({
            userName: '',
            password: '',
          });
          const Navigate = useNavigate();
          const inputChangeHandler=(event)=>{
            setlogindistrict({...logindistrict,[event.target.name]:event.target.value})
        }

        const validateForm = () => {
            const newErrors = {
              userName: '',
              password: '',
            };
        
            let isValid = true;
            if (!logindistrict.userName) {
                newErrors.userName = 'Username is required';
                isValid = false;
              }
          
              if (!logindistrict.password) {
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
                          console.log("enter the axios");
                          const response = await axios.post(`http://localhost:8080/validatelogin?userName=${logindistrict.userName}&password=${logindistrict.password}`, {
                          userName:logindistrict.userName,
                          password:logindistrict.password,
              
                        });
                          
                          if (response.status === 200) {
                            
                            console.log('Sign-in successful');
                            Navigate("/logindistricts/districtfrom")
                            // Redirect or perform other actions upon successful sign-in
                          } else {
                            console.log('Sign-in failed');
                            // Handle sign-in failure, show error message, etc.
                          }
                        } 
                        catch (error) {
                          
                          console.error('Error during sign-in:', error);
                          // Handle error, show error message, etc.
                        }
                
                  }    
                }  

    return (
        <div className="Auth-form-container">
        <form className="Auth-form"  >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In for District</h3>
            <div className="form-group mt-3 " style={{textAlign:"left"}}>
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                name="userName"
                onChange={inputChangeHandler} 
value={logindistrict.userName}
                
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
value={logindistrict.password}
                 
                 autoComplete="off"
              />
{errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br/>
            <div >
            
              <Link to="districtfrom" className="btn btn-primary" onClick={checkData}>Sign In</Link>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="loginregistration" className="btn btn-success" >Sign Up</Link>{' '}
    
            </div>
            
          </div>
        </form>
    
          
        </div>
    )
}

export default LoginDistrict
