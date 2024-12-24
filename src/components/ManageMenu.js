import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ManageMenu = () => {
    const location = useLocation(); 
    return (
        <ul className="nav justify-content-center slide-in-left-enter-active">
            <li className="nav-item">
                <Link className={`nav-link atag ${location.pathname==="/manage/business" ? "border-2 border-bottom border-primary" : ""}`} to="/manage/business">Business</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link atag ${location.pathname==="/manage/industry" ? "border-2 border-bottom border-primary" : ""}`} to="/manage/industry">Industry</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link atag ${location.pathname==="/manage/category" ? "border-2 border-bottom border-primary" : ""}`} to="/manage/category">Category</Link>
            </li>
        </ul>
    )
}

export default ManageMenu