import { Navigate, Outlet } from "react-router-dom"

function App() {
  if(localStorage.getItem("accessToken")){
    return <Outlet />
  }else{
    return <Navigate to={'/auth/login'} />
  }
}

export default App