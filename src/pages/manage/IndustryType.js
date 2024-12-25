import React from 'react'
import ManageMenu from '../../components/ManageMenu'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const IndustryType = () => {

  const { user, isLoggedIn } = useSelector(state => state.auth);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="smp-container mx-auto">
            <ManageMenu />
                <div className="mt-3 border border-warning" data-aos="fade-right">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-4">Create Industry Type</h3>
                                    <form id="registrationForm">
                                        <div className="mb-3">
                                            <label htmlFor="bname" className="form-label">Industry Name</label>
                                            <input type="text" className="form-control" id="bname" placeholder="Enter industry name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="bdescription" className="form-label">Industry Description</label>
                                            <textarea placeholder="Enter industry description" className="form-control" id="bdescription"></textarea>
                                        </div>
                                        <div className="text-center d-grid">
                                            <button type="submit" className="btn btn-warning">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default IndustryType