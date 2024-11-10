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

function App() {
  
  const { user, isLoggedIn } = useSelector(state => state.auth);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logout());
    navigate("/login");
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             {isLoggedIn && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li> }
              {isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li> }
              {!isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
              {isLoggedIn && <li className="nav-item">
                <a style={{ 'cursor': 'pointer' }} className="nav-link" onClick={()=>handleLogout()}>Logout</a>
              </li>}
              {!isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
