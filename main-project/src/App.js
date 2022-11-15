// import logo from './logo.svg';
import './App.css';
import Adminstudent from './adminstudents/adminstudents'
import Loginform from './Loginform';
import { createContext, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Mainfunction from './adminstudents/mainpage'
import Adminissuedbooks from './adminissuedbooks/Adminissuedbooks'
import Adminallbooks from './adminallbooks/Adminallbooks'

const studentContext = createContext()
const adminissuedBook = createContext()

function App() {

  const [studentArray,setStudentarray] = useState([])
  const [adssuedBooksarray,setAdissuedbooksarray] = useState([])

  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
      <adminissuedBook.Provider value={[adssuedBooksarray,setAdissuedbooksarray]}>
           <studentContext.Provider value={[studentArray,setStudentarray]}>
            <Router>
                <Routes>
                <Route path="/" element={ !Authentication ?( <Loginform authfun={Authfun} /> ) : (<Adminissuedbooks/>)}/>
                <Route path="/Students" element={<Adminstudent/>}/>
                <Route path="/Allbooks" element={<Adminallbooks/>}/>

              </Routes>
           </Router>
           </studentContext.Provider>
           </adminissuedBook.Provider>
    
    
    </div>
  );
}

export default App;
export {studentContext}

