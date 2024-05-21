import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Home from "./components/pages/developer/ui/Home"
import Login from "./components/pages/developer/access/Login"
import CreatePassword from "./components/pages/developer/access/CreatePassword"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import Users from "./components/pages/developer/dashboard/users/Users"
import PageNotFound from "./components/partials/PageNotFound"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"



function App() {
const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
      <Router>
        <Routes>
          <Route path="/portfolio" element={
          <ProtectedRoute>
            <Portfolio/>
          </ProtectedRoute>
          }/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/create-password" element={<CreatePassword/>}/>
          <Route path="/user" element={<Users/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
