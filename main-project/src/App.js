// import logo from './logo.svg';
import './App.css';
import Demo from './Demopage';
import Loginform from './Loginform';
import { useState } from 'react';


function App() {

  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
    
    {!Authentication ?( <Loginform authfun={Authfun} /> ) : (<Demo/>)}
    </div>
  );
}

export default App;
