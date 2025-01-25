import { Routes, Route, Link, useLocation } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from "./actions/auth";
import BusinessType from "./pages/manage/BusinessType";
import IndustryType from "./pages/manage/IndustryType";
import Category from "./pages/manage/Category";
import axios from "axios";
import Provider from "./pages/onboard/Provider";
import Businessdetails from "./pages/onboard/Businessdetails";
import PasswordReset from "./pages/PasswordReset";
import SubCategory from "./pages/manage/SubCategory";
import Homenew from "./pages/Homenew";
import Homepage from "./pages/home/Homepage";
import BusinessListing from "./pages/business/BusinessListing";

function App() {

  const location = useLocation();
  const { user, isLoggedIn } = useSelector(state => state.auth);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.status === 417) {
        localStorage.clear();
        handleLogout();
      }
      return Promise.reject(error);
    }
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SMP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <ul className="navbar-nav">
                {isLoggedIn && <li className="nav-item">
                  <Link className={`nav-link text-color atag ${location.pathname === "/" || location.pathname === "/home" ? "border-2 border-bottom active" : ""}`} aria-current="page" to="/home">Home</Link>
                </li>}
                {isLoggedIn && <li className="nav-item">
                  <Link className={`nav-link text-color atag ${location.pathname === "/profile" ? "border-2 border-bottom active" : ""}`} to="/profile">Profile</Link>
                </li>}
                {isLoggedIn && user.roles[0] == 'ROLE_ADMIN' && <li className="nav-item">
                  <Link className={`nav-link text-color atag ${location.pathname === "/manage/category" || location.pathname === "/manage/subcategory" || location.pathname === "/manage/industry" || location.pathname === "/manage/business" ? "border-2 border-bottom active" : ""}`} to="/manage/category">
                    Manage
                  </Link>
                </li>}
                {!isLoggedIn && <li className="nav-item">
                  <Link className={`nav-link text-color atag ${location.pathname === "/login" ? "border-2 border-bottom active" : ""}`} to="/login">Login</Link>
                </li>}
                {isLoggedIn && <li className="nav-item">
                  <a style={{ 'cursor': 'pointer' }} className="nav-link text-color atag" onClick={() => handleLogout()}>Logout</a>
                </li>}
                {!isLoggedIn && <li className="nav-item">
                  <Link className={`nav-link text-color atag ${location.pathname === "/register" ? "border-2 border-bottom active" : ""}`} to="/register">Register</Link>
                </li>}
              </ul>
            </ul>
            <form className="d-flex search-container" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn-smp-success" type="submit">Search</button>
            </form>
            <Link to="/onboard/provider" className="btn-smp-success d-grid">Register your business</Link>
          </div>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homenew" element={<Homenew />} />
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
          <Route path="/manage/subcategory" element={<SubCategory />} />
          <Route path="/businesslisting/:category" element={<BusinessListing />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
