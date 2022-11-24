// import logo from './logo.svg';
import './App.css';
import Adminstudent from './adminstudents/adminstudents'
import Loginform from './Loginform';
import { createContext,useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route, json} from "react-router-dom"
// import Mainfunction from './adminstudents/mainpage'
import Adminissuedbooks from './adminissuedbooks/Adminissuedbooks'
import Adminallbooks from './adminallbooks/Adminallbooks'
import ViewMainpage from './viewComponent/viewMainpage';

const studentContext = createContext()
const adminissuedBook = createContext()
const adminallbooksContext = createContext()

function App() {

  const getLocalStudent = () =>{
    let studentList = localStorage.getItem('studentArray')
    if(studentList){
      return JSON.parse(localStorage.getItem('studentArray'))
    }else{
      return []
    }
  }
  const getAllbooks = () =>{
    let allbooksList = localStorage.getItem('allbooksArray')
    if(allbooksList){
      return JSON.parse(localStorage.getItem('allbooksArray'))
     
    }else{
      return []
    }
  }

  const getLocalissuedbooks = () =>{
    let issuedbooksList = localStorage.getItem('issuedbooksArray')
    if(issuedbooksList){
      return JSON.parse(localStorage.getItem('issuedbooksArray'))
    }else{
      return []
    }
  }

  const [studentArray,setStudentarray] = useState(getLocalStudent())
  const [adissuedBooksarray,setAdissuedbooksarray] = useState(getLocalissuedbooks())
  const [adallbooksArray,setAdallbooksarray] = useState(getAllbooks())
  //useeffect fro local storage 
  useEffect(()=>{
    localStorage.setItem('studentArray',JSON.stringify(studentArray))
  },[studentArray])

  useEffect(()=>{
    localStorage.setItem('allbooksArray',JSON.stringify(adallbooksArray))
  },[adallbooksArray])

  useEffect(()=>{
    localStorage.setItem('issuedbooksArray',JSON.stringify(adissuedBooksarray))
  },[adissuedBooksarray])





  const [Authentication,setAuthentication] = useState(false)
  
  const Authfun = () =>{
    setAuthentication(true)
  }
  return (
    <div className="App">
      <adminissuedBook.Provider value={[adissuedBooksarray,setAdissuedbooksarray]}>
      <adminallbooksContext.Provider value={[adallbooksArray,setAdallbooksarray]}>
           <studentContext.Provider value={[studentArray,setStudentarray]}>
           
            <Router>
                <Routes>
                <Route path="/" element={ !Authentication ?( <Loginform authfun={Authfun} /> ) : (<Adminissuedbooks/>)}/>
                <Route path="/students" element={<Adminstudent/>}/>
                <Route path="/allbooks" element={<Adminallbooks/>}/>
                <Route path="/issuedbooks" element={<Adminissuedbooks/>}/>
                <Route path="/studentdetails/:id" element={<ViewMainpage/>}/>

              </Routes>
           </Router>
           
            </studentContext.Provider>
           </adminallbooksContext.Provider>
        </adminissuedBook.Provider>
    
    
    </div>
  );
}

export default App;
export {studentContext}
export {adminissuedBook}
export {adminallbooksContext}

