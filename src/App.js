import { Routes, Route, Link, useLocation } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import {logout} from "./actions/auth";
import BusinessType from "./pages/manage/BusinessType";
import IndustryType from "./pages/manage/IndustryType";
import Category from "./pages/manage/Category";
import axios from "axios";
import Provider from "./pages/onboard/Provider";
import Businessdetails from "./pages/onboard/Businessdetails";
import PasswordReset from "./pages/PasswordReset";

function App() {
  
  const location = useLocation(); 
  const { user, isLoggedIn } = useSelector(state => state.auth);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  axios.interceptors.response.use(
    response => response,
    error => {
      if(error.status === 417){
        localStorage.clear();
        handleLogout();
      }
      return Promise.reject(error);
    }
  );

  const handleLogout = ()=>{
    dispatch(logout());
    navigate("/login");
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SMP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             {isLoggedIn && <li className="nav-item">
                <Link className={`nav-link text-color atag ${location.pathname==="/" || location.pathname==="/home" ? "border-2 border-bottom border-warning active" : ""}`} aria-current="page" to="/home">Home</Link>
              </li> }
              {isLoggedIn && <li className="nav-item">
                <Link className={`nav-link text-color atag ${location.pathname==="/profile" ? "border-2 border-bottom border-warning active" : ""}`} to="/profile">Profile</Link>
              </li> }
              {isLoggedIn && user.roles[0] == 'ROLE_ADMIN' && <li className="nav-item">
                <Link className={`nav-link text-color atag ${location.pathname==="/manage/category" || location.pathname==="/manage/industry" || location.pathname==="/manage/business" ? "border-2 border-bottom border-warning active" : ""}`} to="/manage/business">
                    Manage
                </Link>
              </li> }
              {!isLoggedIn && <li className="nav-item">
                <Link className={`nav-link text-color atag ${location.pathname==="/login" ? "border-2 border-bottom border-warning active" : ""}`} to="/login">Login</Link>
              </li>}
              {isLoggedIn && <li className="nav-item">
                <a style={{ 'cursor': 'pointer' }} className="nav-link text-color atag" onClick={()=>handleLogout()}>Logout</a>
              </li>}
              {!isLoggedIn && <li className="nav-item">
                <Link className={`nav-link text-color atag ${location.pathname==="/register" ? "border-2 border-bottom border-warning active" : ""}`} to="/register">Register</Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/onboard/provider" element={<Provider />} />
          <Route path="/onboard/businessdetails/:businessDetailId" element={<Businessdetails />} />
          <Route path="/manage/business" element={<BusinessType />} />
          <Route path="/manage/industry" element={<IndustryType />} />
          <Route path="/manage/category" element={<Category />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
