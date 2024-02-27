import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';


function DistrictDetails() {
    const [districtdetail, setdistrictdetail] = useState({
      district:"",
     
});
const [districtdetails, setdistrictdetails] = useState({
  dist:"",
  mon:""
 
});

    const [responseData, setResponseData] = useState([]);
    const [responseDatas, setResponseDatas] = useState([]);
  
 
  const inputChangeHandler=(event)=>{
    setdistrictdetail({...districtdetail,[event.target.name]:event.target.value})
}
const inputChangeHandlers=(event)=>{
  setdistrictdetails({...districtdetails,[event.target.name]:event.target.value})
}
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${"http://localhost:8080/getCompanyByDistrict"}/${districtdetail.district}`);
        setResponseData(response.data);
        console.log(response.data);
        console.log(response.status);
      } catch (error) {
        
        console.error('Error during sign-in:', error);
      }
    };
    const Data = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getprofitorlossdata?district=${districtdetails.dist}&month=${districtdetails.mon}`);
        setResponseDatas(response.data);
        console.log(response.data);
        console.log(response.status);
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
    };

    useEffect(() => {
      if (districtdetail) {
        fetchData();
      }
    }, [districtdetail]);
    useEffect(() => {
      if (districtdetails) {
        Data();
      }
    }, [districtdetails]);

    

    return (
        <div className="Auth-form-content">
            <label>Enter the District :</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='text' name='district' placeholder='Enter the District' value={districtdetail.district} onChange={inputChangeHandler}></input>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/><br/>
            {/* <button className='btn btn-primary'onClick={fetchData}>Show Detail</button> */}
      <div>
        <div>
        <table className='table table-hover table-striped  table-bordered' >
        <thead>
                    <tr className='table-primary'>
                        <th>CompanyID</th>
                        <th>CompanyName</th>
                        <th>Date</th>
                        <th>Month</th>
                        <th>Total Monthly Revenue</th>
                        <th>Total Monthly Salaries</th>
                        <th>Total Monthly Allowances</th>
                        <th>Budget</th>
                        <th>State</th>
                        <th>District</th>
                    </tr>
                </thead>
                <tbody>
                {responseData.map(item => (
                        <tr key={item.companyId}>
                            <td>{item.companyId}</td>
                            <td>{item.companyName}</td>
                            <td>{item.dataAddedDate}</td>
                            <td>{item.month}</td>
                            <td>{item.totalMonthlyRevenue}</td>
                            <td>{item.totalMonthlySalaries}</td>
                            <td>{item.totalMonthlyAllowances}</td>
                            <td>{item.budget}</td>
                            <td>{item.state}</td>
                            <td>{item.district}</td>
                           
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
        <div>
          <input type='text' name='dist' placeholder='Enter the District' value={districtdetails.dist} onChange={inputChangeHandlers}></input>
          <input type='text' name='mon' placeholder='Enter the Month' value={districtdetails.mon} onChange={inputChangeHandlers}></input><br/> <br/>
         <p>{responseDatas}</p>
          
          </div>
        
      </div>
      </div>
      
      
      
            )
}

export default DistrictDetails
