// import logo from './logo.svg';
import './App.css';
import Adminstudent from './adminstudents/adminstudents'
import Loginform from './Loginform';
import { createContext, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Mainfunction from './adminstudents/mainpage'
import Adminissuedbooks from './adminissuedbooks/Adminissuedbooks'
import Adminallbooks from './adminallbooks/Adminallbooks'
import ViewMainpage from './viewComponent/viewMainpage';

const studentContext = createContext()
// const adminissuedBook = createContext()
const adminallbooksContext = createContext()

function App() {

  const [studentArray,setStudentarray] = useState([])
  // const [adissuedBooksarray,setAdissuedbooksarray] = useState([])
  const [adallbooksArray,setAdallbooksarray] = useState([])

  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
      {/* <adminissuedBook.Provider value={[adissuedBooksarray,setAdissuedbooksarray]}> */}
      <adminallbooksContext.Provider value={[adallbooksArray,setAdallbooksarray]}>
           <studentContext.Provider value={[studentArray,setStudentarray]}>
           
            <Router>
                <Routes>
                <Route path="/" element={ !Authentication ?( <Loginform authfun={Authfun} /> ) : (<Adminissuedbooks/>)}/>
                <Route path="/students" element={<Adminstudent/>}/>
                <Route path="/allbooks" element={<Adminallbooks/>}/>
                <Route path="/viwestudent" element={<ViewMainpage/>}/>

              </Routes>
           </Router>
           
            </studentContext.Provider>
           </adminallbooksContext.Provider>
        {/* </adminissuedBook.Provider> */}
    
    
    </div>
  );
}

export default App;
export {studentContext}
// export {adminissuedBook}
export {adminallbooksContext}

