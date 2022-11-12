// import logo from './logo.svg';
import './App.css';
import Adminstudent from './adminstudents'
import Loginform from './Loginform';
import { useState } from 'react';


function App() {

  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
    
    {!Authentication ?( <Loginform authfun={Authfun} /> ) : (<Adminstudent/>)}
    </div>
  );
}

export default App;

