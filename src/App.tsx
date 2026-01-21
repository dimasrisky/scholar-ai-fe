import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import { currentUser } from "./utils/current-user"

function App() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: currentUser
  })

  console.log(isSuccess);
  console.log(data);

  if(isSuccess && !isLoading){
    return <Outlet />
  }else if(!isLoading) {
    return <Navigate to={'/auth/login'} />
  }
}

export default App