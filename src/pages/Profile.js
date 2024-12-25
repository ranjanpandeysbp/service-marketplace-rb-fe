import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const Profile = () => {

  const { user, isLoggedIn } = useSelector(state => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
<<<<<<< HEAD
    <div className="smp-container my-5 d-flex flex-column" data-aos="zoom-in">
=======
    <div className="smp-container my-5 d-flex flex-column">
>>>>>>> a369ad184f34a9b1d5c770c59ddfc8cc5ecc21f9
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">{user.firstName} {user.lastName}</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {user.email}
        </p>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {user.roles}
        </p>
      </div>
    </div>
  )
}

export default Profile