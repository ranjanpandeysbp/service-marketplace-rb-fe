import React from 'react'
import ManageMenu from '../../components/ManageMenu'
import { motion } from "framer-motion";

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
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default IndustryType