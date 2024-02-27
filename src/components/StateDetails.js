import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function StateDetails() {
    const [statedetail, setstatedetail] = useState({
      state:"", 
});
const [statedetails, setstatedetails] = useState({
    sta:"", 
    mon:"",
});
    const [responseData, setResponseData] = useState([]);
    const [responseDatas, setResponseDatas] = useState([]);
   const inputChangeHandler=(event)=>{
    setstatedetail({...statedetail,[event.target.name]:event.target.value})
}
const inputChangeHandlers=(event)=>{
    setstatedetails({...statedetails,[event.target.name]:event.target.value})
}
    const fetchData = async () => {
      try {
        const response = await axios.get(`${"http://localhost:8080/getCompanyByState"}/${statedetail.state}`);
        setResponseData(response.data);
        console.log(response.data);
        console.log(response.status);
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
    };
    const Data = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/getprofitorlossdatabycountry?state=${statedetails.sta}&month=${statedetails.mon}`);
          setResponseDatas(response.data);
          console.log(response.data);
          console.log(response.status);
        } catch (error) {
          console.error('Error during sign-in:', error);
        }
      };
    useEffect(() => {
      if (statedetail) {
        fetchData();
      }
    }, [statedetail]);
    useEffect(() => {
        if (statedetails) {
          Data();
        }
      }, [statedetails]);
    return (
        <div className="Auth-form-content">
            <label>Enter the State :</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='text' name='state' placeholder='Enter the State' value={statedetail.state} onChange={inputChangeHandler}></input>
           
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
          <input type='text' name='sta' placeholder='Enter the State' value={statedetails.sta} onChange={inputChangeHandlers}></input>
          <input type='text' name='mon' placeholder='Enter the Month' value={statedetails.mon} onChange={inputChangeHandlers}></input>
        
         <p>{responseDatas}</p>                 
      </div>
      </div>
      </div>
      
       )
}

export default StateDetails
