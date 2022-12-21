import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Transfer from "./pages/transfer/Transfer";

// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";



const App = () => {
  const {user, error} = useContext(AuthContext)
  // const navigate = useNavigate()

  const protectedRoute = ({children}) => {
    if(!user){
      Navigate('/login')
    } else{
      return children;
    }
  }
  
  return (<div>
    <BrowserRouter>
    <Routes>
      
      {/* {user.data && }/>} */}
      <Route path="/" element={<Home/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      
        
      
  
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
        
    </Routes>
    </BrowserRouter>
    
    </div>);
};

export default App;