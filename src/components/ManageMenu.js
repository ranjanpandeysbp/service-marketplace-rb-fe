import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ManageMenu = () => {
    const location = useLocation(); 
    return (
        <ul className="nav justify-content-center mt-3">
            {/* <li className="nav-item">
                <Link className={`nav-link mx-2 fw-medium text-dark atag ${location.pathname==="/manage/business" ? "border-2 border-bottom border-warning" : ""}`} to="/manage/business">Business</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link mx-2 fw-medium text-dark atag ${location.pathname==="/manage/industry" ? "border-2 border-bottom border-warning" : ""}`} to="/manage/industry">Industry</Link>
            </li> */}
            <li className="nav-item">
            <Link className={`nav-link mx-2 fw-medium text-dark atag ${location.pathname==="/manage/category" ? "border-2 border-bottom border-warning" : ""}`} to="/manage/category">Category</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link mx-2 fw-medium text-dark atag ${location.pathname==="/manage/subcategory" ? "border-2 border-bottom border-warning" : ""}`} to="/manage/subcategory">Sub Category</Link>
            </li>
        </ul>
    )
}

export default ManageMenu