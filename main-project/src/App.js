// import logo from './logo.svg';
import "./App.css";
import Adminstudent from "./adminstudents/adminstudents";
import Loginform from "./Loginform";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminissuedbooks from "./adminissuedbooks/Adminissuedbooks";
import Adminallbooks from "./adminallbooks/Adminallbooks";
import ViewMainpage from "./viewComponent/viewMainpage";
import MyBooks from "./Studentsmybooks/MyBooks";
import AllBooks from "./Studentallbooks/AllBooks";

const studentContext = createContext();
const adminissuedBook = createContext();
const adminallbooksContext = createContext();

function App() {
  const [studentSection, setStudentsection] = useState(false);
  // const [studentkey, setStudentkey] = useState("");
  const getLocalStudent = () => {
    let studentList = localStorage.getItem("studentArray");
    if (studentList) {
      return JSON.parse(localStorage.getItem("studentArray"));
    } else {
      return [];
    }
  };
  const getAllbooks = () => {
    let allbooksList = localStorage.getItem("allbooksArray");
    if (allbooksList) {
      return JSON.parse(localStorage.getItem("allbooksArray"));
    } else {
      return [];
    }
  };

  const getLocalissuedbooks = () => {
    let issuedbooksList = localStorage.getItem("issuedbooksArray");
    if (issuedbooksList) {
      return JSON.parse(localStorage.getItem("issuedbooksArray"));
    } else {
      return [];
    }
  };

  const [studentArray, setStudentarray] = useState(getLocalStudent());
  const [adissuedBooksarray, setAdissuedbooksarray] = useState(
    getLocalissuedbooks()
  );
  const [adallbooksArray, setAdallbooksarray] = useState(getAllbooks());
  //useeffect fro local storage
  useEffect(() => {
    localStorage.setItem("studentArray", JSON.stringify(studentArray));
  }, [studentArray]);

  useEffect(() => {
    localStorage.setItem("allbooksArray", JSON.stringify(adallbooksArray));
  }, [adallbooksArray]);

  useEffect(() => {
    localStorage.setItem(
      "issuedbooksArray",
      JSON.stringify(adissuedBooksarray)
    );
  }, [adissuedBooksarray]);

  const [Authentication, setAuthentication] = useState(false);
  const [studentAuthentication, setStudentauthentication] = useState(false);

  const Authfun = () => {
    setAuthentication(true);
  };

  const Studentauthentication = () => {
    setStudentauthentication(true);
    console.log("kitti");
  };

  return (
    <div className="App">
      <adminissuedBook.Provider
        value={[adissuedBooksarray, setAdissuedbooksarray]}
      >
        <adminallbooksContext.Provider
          value={[adallbooksArray, setAdallbooksarray]}
        >
          <studentContext.Provider value={[studentArray, setStudentarray]}>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    studentSection ? (
                      !studentAuthentication ? (
                        <Loginform
                          studentSection={studentSection}
                          setStudentsection={setStudentsection}
                          Studentauthentication={Studentauthentication}
                          // studentkey={studentkey}
                          // setStudentkey={setStudentkey}
                        />
                      ) : (
                        <MyBooks
                          // studentkey={studentkey}
                          // setStudentkey={setStudentkey}
                        />
                      )
                    ) : !Authentication ? (
                      <Loginform
                        
                        authfun={Authfun}
                        // studentkey={studentkey}
                        // setStudentkey={setStudentkey}
                        studentSection={studentSection}
                        setStudentsection={setStudentsection}
                        Studentauthentication={Studentauthentication}
                      />
                    ) : (
                      <Adminissuedbooks />
                    )
                  }
                />

                {/* <Route
                  path="/studentmybooks"
                  element={(!studentAuthentication ? <Loginform  /> : <MyBooks studentkey={studentkey} setStudentkey={setStudentkey}/>)}/> */}
                <Route path="/students" element={<Adminstudent />} />
                <Route path="/allbooks" element={<Adminallbooks />} />
                <Route path="/issuedbooks" element={<Adminissuedbooks />} />
                <Route path="/studentdetails/:id" element={<ViewMainpage />} />
                <Route
                  path="/studentallbooks"
                  element={
                    <AllBooks
                      // studentkey={studentkey}
                      // setStudentkey={setStudentkey}
                    />
                  }
                />
                <Route path="/studentmybooks" element={<MyBooks />} />
              </Routes>
            </Router>
          </studentContext.Provider>
        </adminallbooksContext.Provider>
      </adminissuedBook.Provider>
    </div>
  );
}

export default App;
export { studentContext };
export { adminissuedBook };
export { adminallbooksContext };
