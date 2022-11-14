// import logo from './logo.svg';
import './App.css';
import Adminstudent from './adminstudents/adminstudents'
import Loginform from './Loginform';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Mainfunction from './adminstudents/mainpage'
import Adminissuedbooks from './adminissuedbooks/Adminissuedbooks'
import Adminallbooks from './adminallbooks/Adminallbooks'



function App() {


  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
      
           
            <Router>
                <Routes>
                <Route path="/" element={ !Authentication ?( <Loginform authfun={Authfun} /> ) : (<Adminissuedbooks/>)}/>
                <Route path="/Students" element={<Adminstudent/>}/>
                <Route path="/Allbooks" element={<Adminallbooks/>}/>

              </Routes>
           </Router>
    
    
    </div>
  );
}

export default App;

