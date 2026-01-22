import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import { currentUser } from "./utils/current-user"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const { isSuccess, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: currentUser
  })

  if (isLoading) {
    return <LoadingScreen message="Redirecting..." />
  }

  if (isSuccess) {
    return <Outlet />
  }

  if (isError) {
    return <Navigate to={'/auth/login'} />
  }

  return <LoadingScreen message="Loading..." />
}

export default App