import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { API_BASE_URL } from "../utility"

type ProtectedRouteProps = {
    children?: React.ReactNode
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {
    const navigate = useNavigate()
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const userToken = localStorage.getItem("user-token");
    axios.defaults.headers.common.Authorization = `Bearer ${userToken}`

    const checkToken =  (token:string) => {
        const data = {
            "token":token
        }
        let result:boolean = false;
        axios.post(API_BASE_URL+"/auth/token/validate",data)
                .then(response => {
                    result = response.data;
                    console.log(result);
                    
                })
                .catch(error => console.log(error)
                )
                return result;
        }
    const validateToken = () => {
        
        if(!userToken || userToken === "undefined" ) {
            setIsAuthenticated(false);
            navigate("/auth/login");
        }else
        {
            setIsAuthenticated(true);
            // const authToken = `Bearer ${userToken}`
            
        }
    }

    useEffect(
        () => {validateToken();
            console.log("running route");
            
            axios.defaults.headers.common.Authorization = userToken;
            console.log("header is set");
            
        },[userToken]
    )

  return (
    <>
    <Outlet />
        {isAuthenticated ? children : null}
    </>
  )
}



export default ProtectedRoute