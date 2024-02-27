import React from 'react'
import '../css/LoginRegistration.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const LoginRegistration=()=> {
    const [loginregistration,setloginregistration]=useState(
        {
            userId:"",
            userName:"",
            password:"",
            role:""
        } );
        const [errors, setErrors] = useState({
            userId:"",
            userName:"",
            password:"",
            role:"",
            
          });
          const inputChangeHandler=(event)=>{
            setloginregistration({...loginregistration,[event.target.name]:event.target.value})
        }
        const Navigate = useNavigate();
        const validateForm = () => {
            const newErrors = {
                userId:'',
                userName:'',
                password:'',
                role:'',
                
            };
        
            let isValid = true;
            if (!loginregistration.userId) {
                newErrors.userId = 'UserId is required';
                isValid = false;
              }
            if (!loginregistration.userName) {
                newErrors.userName = 'Username is required';
                isValid = false;
              }
          
              if (!loginregistration.password) {
                newErrors.password = 'Password is required';
                isValid = false;
              }
             
              if (!loginregistration.role) {
                newErrors.role = 'Role is required';
                isValid = false;
              }
          
              setErrors(newErrors);
              return isValid;
            };
            const checkData= async (event)=>{
              
                event.preventDefault();

                if (validateForm()) {
                    try {
                      const response = await axios.post('http://localhost:8080/saveUser', {
                        userId: loginregistration.userId,  
                        userName: loginregistration.userName,
                        password: loginregistration.password,
                        role: loginregistration.role,
                      });
                      

        
                      if (response.status === 200) {
                        window.alert("New User Added");
                        Navigate("/")
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
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register User Here</h3>
            
            <div className="form-group mt-3">
              <label>UserID</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Userid"
                name="userId"
                onChange={inputChangeHandler}
                value={loginregistration.userId}
              />
              {errors.userId && <p className="error">{errors.userId}</p>}
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                name="userName"
                onChange={inputChangeHandler}
                value={loginregistration.userName}
              />
              {errors.userName && <p className="error">{errors.userName}</p>}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={loginregistration.password}
                onChange={inputChangeHandler}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            
            <div className="form-group mt-3">
              <label>Role</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Role"
                name="role"
                value={loginregistration.role}
                onChange={inputChangeHandler}
              />
              {errors.role && <p className="error">{errors.role}</p>}
            </div>
            
            

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success" onClick={checkData}>
                Submit
              </button>
            </div>
          
          </div>
        </form>
            
        </div>
    )
}

export default LoginRegistration
