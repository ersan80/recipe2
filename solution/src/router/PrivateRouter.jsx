import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = ()=>{

const user=   JSON.parse(sessionStorage.getItem("user"))

return(
  user? <Outlet></Outlet> : <Navigate to="/"> </Navigate>
)
}

export default PrivateRouter