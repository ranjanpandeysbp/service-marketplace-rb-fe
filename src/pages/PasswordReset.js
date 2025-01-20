import React, {useState} from 'react'
import authService from '../services/auth.service';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const { isLoggedIn } = useSelector(state => state.auth);

  const handleReset = async (event)=>{
    event.preventDefault();
    if(!email || !password){
      Swal.fire({
        title: "Mandatory Field",
        text: "One or more mandatory fields are empty!",
        icon: "error"
      });
      return;
    }
    let request = { email, password };
    try{
      let response = await authService.passwordReset(request);
      if(response.status == 201){
        navigate("/login");
      }
    }catch(error){
      console.log(error);
      if(error.response.status == 403){
        Swal.fire({
          title: "Unauthorized",
          text: "Invalid credentials",
          icon: "error"
        });
      }
    }
  }
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="smp-container" data-aos="zoom-in">
      <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-12'>
            <h3 className='text-center'>Password Reset</h3>
        </div>
        <div className='col-md-8 col-sm-12'>
          <form onSubmit={handleReset}>
    
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-warning">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default PasswordReset