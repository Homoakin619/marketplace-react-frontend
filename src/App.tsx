import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/main.css"
import { Outlet, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./util/utility";
import axios from "axios";
import Nav from "./components/app/Nav";
import ProtectedRoute from "./util/ProtectedRoute";

function App() {
    const navigate = useNavigate()
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const userToken = localStorage.getItem("user-token");
    const currentUser = localStorage.getItem("currentUser");
    
    const checkToken =  (token:string) => {
        let result:boolean = false;
        axios.post(API_BASE_URL,{"token":token,"username":currentUser})
                .then(response => {
                    result = response.data;
                })
                .catch(error => console.log(error)
                )
                return result;
    }
    const validateToken = () => {
        
        if(!userToken || userToken === "undefined" ) {
            setIsAuthenticated(false);
            navigate("/auth/login");
        } else {
          setIsAuthenticated(true);
        }
        
    }

    useEffect(
        () => {validateToken()},[userToken]
    )
      console.log(isAuthenticated)
  return (
    <>
    {isAuthenticated && <Nav />}
      
        <Outlet/>

      
    </>
  );
}

export default App;
