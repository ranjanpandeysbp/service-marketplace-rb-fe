import React from 'react'
import ManageMenu from '../../components/ManageMenu'
import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======

const IndustryType = () => {
  return (
    <div className="smp-container mx-auto">
            <ManageMenu />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}>
                <div className="mt-3 border border-primary-subtle">
>>>>>>> a369ad184f34a9b1d5c770c59ddfc8cc5ecc21f9
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
<<<<<<< HEAD
                                            <button type="submit" className="btn btn-warning">Submit</button>
=======
                                            <button type="submit" className="btn btn-primary">Submit</button>
>>>>>>> a369ad184f34a9b1d5c770c59ddfc8cc5ecc21f9
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
=======
            </motion.div>
>>>>>>> a369ad184f34a9b1d5c770c59ddfc8cc5ecc21f9
        </div>
  )
}

export default IndustryType