import React, { useState } from 'react';
import '../css/loginpages.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { Select } from '@mui/material';




 const DistrictFrom=()=> {
     const [districtfrom,setdistrictfrom]=useState(
        {
            companyId:"",
            companyName:"",
            dataAddedDate:"",
            month:"",
            totalMonthlyRevenue:"",
            totalMonthlySalaries:"",
            totalMonthlyAllowances:"",
            budget:"",
            state:"",
            district:"",
            
        } );
        const [errors, setErrors] = useState({
            companyID:"",
            companyName:"",
            dataAddedDate:"",
            month:"",
            totalMonthlyRevenue:"",
            totalMonthlySalaries:"",
            totalMonthlyAllowances:"",
            budget:"",
            state:"",
            district:"",
            
          });
        const inputChangeHandler=(event)=>{
            setdistrictfrom({...districtfrom,[event.target.name]:event.target.value})
        }

        const validateForm = () => {
            const newErrors = {
                companyId:"",
                companyName:"",
                dataAddedDate:"",
                month:"",
                totalMonthlyRevenue:"",
                totalMonthlySalaries:"",
                totalMonthlyAllowances:"",
                budget:"",
                state:"",
                district:"",
                
            };
        
            let isValid = true;
            if (!districtfrom.companyId) {
                newErrors.companyId = 'Company ID is required';
                isValid = false;
              }
              if (!districtfrom.companyName) {
                newErrors.companyName = 'Company Name is required';
                isValid = false;
              }
              if (!districtfrom.dataAddedDate) {
                newErrors.dataAddedDate = 'Date is required';
                isValid = false;
              }
              if (!districtfrom.month) {
                newErrors.month = 'Month is required';
                isValid = false;
              }
              if (!districtfrom.totalMonthlyRevenue) {
                newErrors.totalMonthlyRevenue = 'Total Monthly Revenue is required';
                isValid = false;
              }
          
              if (!districtfrom.totalMonthlySalaries) {
                newErrors.totalMonthlySalaries = 'Total Monthly Salaries is required';
                isValid = false;
              }
              if (!districtfrom.totalMonthlyAllowances) {
                newErrors.totalMonthlyAllowances = 'Total Monthly Allowance is required';
                isValid = false;
              }
              if (!districtfrom.budget) {
                newErrors.budget = 'Budget is required';
                isValid = false;
              }
              if (!districtfrom.state) {
                newErrors.state = 'State is required';
                isValid = false;
              }
              if (!districtfrom.district) {
                newErrors.district = 'District is required';
                isValid = false;
              }          
              setErrors(newErrors);
              return isValid;
            };

            const checkData= async (event)=>{
              
                event.preventDefault();

                if (validateForm()) {
                    try {
                       
                      const response = await axios.post('http://localhost:8080/saveCompany', {
                        companyId:districtfrom.companyId,
                        companyName:districtfrom.companyName,
                        dataAddedDate:districtfrom.dataAddedDate,
                        month:districtfrom.month,
                        totalMonthlyRevenue:districtfrom.totalMonthlyRevenue,
                        totalMonthlySalaries:districtfrom.totalMonthlySalaries,
                        totalMonthlyAllowances:districtfrom.totalMonthlyAllowances,
                        budget:districtfrom.budget,
                        state:districtfrom.state,
                        district:districtfrom.district,
                       
                      });
        
                      if (response.status === 200) {
                        console.log('Sign-in successful');
                        window.alert("One Company Added")
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
    // 'container container-fluid min-vh-100 d-flex justify-content-center align-items-center'
    <div className='container container-fluid col-5'>
     {/* style={{width:"400px"}} */}
     
      <form className='form-label text-center' onSubmit={checkData} >    
        {/* onsubmit event is use to submit the detail we have to define the onsubmit  */}
        {/* value is us to store the each value which is pass  */}
        
           
            
            <br></br>
            <label className='form-lable' >CompanyID </label>
            <input className='form-control'  type='text' name='companyId' placeholder='Enter Company ID'  value={districtfrom.companyId} onChange={inputChangeHandler} ></input>  
            {errors.companyId && <p className="error">{errors.companyId}</p>}
            
            <label className='form-lable' >CompanyName</label>        
            <input className='form-control' type='text' name='companyName' placeholder='Enter Company Name' value={districtfrom.companyName} onChange={inputChangeHandler} ></input>
            {errors.companyName && <p className="error">{errors.companyName}</p>}
       
            <label className='form-lable'>Date : </label>
            <input className='form-control'  type='date' name='dataAddedDate' value={districtfrom.dataAddedDate}  onChange={inputChangeHandler}></input>   
            {errors.dataAddedDate && <p className="error">{errors.dataAddedDate}</p>}

            <label className='form-lable' >Month :</label>  <br/>   
            <select className='form-control'name='month' value={districtfrom.month} onChange={inputChangeHandler} >
              <option >January</option>
              <option >February</option>
              <option >March</option>
              <option >April</option>
              <option >May</option>
              <option >June</option>
              <option >July</option>
              <option >August</option>
              <option >September</option>
              <option >October</option>
              <option >November</option>
              <option >December</option>
              </select>

            {/* <input className='form-control' type='text' name='month' placeholder='Enter Month' value={districtfrom.month} onChange={inputChangeHandler} ></input> */}
            {errors.month && <p className="error">{errors.month}</p>}
            
            <label className='form-lable'>Total Monthly Revenue : </label>
            <input className='form-control' type='number' name='totalMonthlyRevenue' placeholder='Enter Total Monthly Revenue' value={districtfrom.totalMonthlyRevenue} onChange={inputChangeHandler} ></input>
            {errors.totalMonthlyRevenue && <p className="error">{errors.totalMonthlyRevenue}</p>}

            <label className='form-lable'>Total Monthly Salaries : </label>
            <input className='form-control' type='number' name='totalMonthlySalaries' placeholder='Enter Total Monthly Salaries' value={districtfrom.totalMonthlySalaries} onChange={inputChangeHandler} ></input>
            {errors.totalMonthlySalaries && <p className="error">{errors.totalMonthlySalaries}</p>}   
            
            <label className='form-lable'> Total Monthly Allowances : </label>
            <input className='form-control' type='number' name='totalMonthlyAllowances' placeholder='Enter Total Monthly Allowances' value={districtfrom.totalMonthlyAllowances}  onChange={inputChangeHandler}></input>
            {errors.totalMonthlyAllowances && <p className="error">{errors.totalMonthlyAllowances}</p>}

            <label className='form-lable'> Budget : </label>
            <input className='form-control' type='number' name='budget' placeholder='Enter Budget' value={districtfrom.budget}  onChange={inputChangeHandler}></input>
            {errors.budget && <p className="error">{errors.budget}</p>}

            <label className='form-lable'> State : </label>
            <select className='form-control' name='state' value={districtfrom.state}  onChange={inputChangeHandler}>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
            {/* <input className='form-control' type='text' name='state' placeholder='Enter State' value={districtfrom.state}  onChange={inputChangeHandler}></input> */}
            {errors.state && <p className="error">{errors.state}</p>}

            <label className='form-lable'> District : </label>
            <input className='form-control' type='text' name='district' placeholder='Enter District' value={districtfrom.district}  onChange={inputChangeHandler}></input>
            {errors.district && <p className="error">{errors.district}</p>}
        

        <button type="submit" className="btn btn-primary" >Submit</button>
       
      </form>
        <br></br>
        
       

    </div>
  )
}

export default DistrictFrom
