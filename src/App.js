import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import './App.css';
import Appbar from './components/Appbar';
import LoginDistrict from './components/LoginDistrict';
import LoginPages from './components/LoginPages';
import LoginState from './components/LoginState';
import LoginCountry from './components/LoginCountry';
import DistrictFrom from './components/DistrictFrom';
import DistrictDetails from './components/DistrictDetails';
import LoginRegistration from './components/LoginRegistration';
import StateDetails from './components/StateDetails';
import bank from './assets/wp2561065.webp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Card.Header className='border-info'> */}
      <Appbar/>
      {/* <img src={bank} alt ="bank" 
      style={{position:'fixed' ,top:'0 ', 
      left: '0',width:'20%',height:'auto' }}
      ></img> */}
      <div style={{ backgroundImage:`url(${bank})` , height:'80 px',width:'40 px'}}>
        

      
      <Routes>
        
        <Route path='' element={<LoginPages/>} />
        <Route path='logindistricts' element={<LoginDistrict/>}/>
        <Route path='loginstate' element={<LoginState/>}/>
        <Route path='logincountry' element={<LoginCountry/>}/>
        <Route path='logindistricts/districtfrom' element={<DistrictFrom/>}/>
        <Route path='loginstate/districtdetails' element={<DistrictDetails/>} />
        <Route path='logindistricts/loginregistration' element={<LoginRegistration/>} />
        <Route path='loginstate/loginregistration' element={<LoginRegistration/>} />    
        <Route path='logincountry/loginregistration' element={<LoginRegistration/>} />   
        <Route path='logincountry/statedetail' element={<StateDetails/>} /> 
      
      </Routes>
      {/* </Card.Body> */}

      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
