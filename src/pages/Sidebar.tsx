import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";

export const Sidebar = () => {

    return (
        <div className="sidebar">

            <ProfileCard
                initialName="Resort Name"
                initialTitle="Business Permit"
                initialProfileImageUrl="https://via.placeholder.com/150"
                
            />
            
            <Link to="/" className="link-container">
                <i className='bx bxs-home' ></i> 
                <span className="nav-item">Home</span>
            </Link>
            <Link to="/dashboard" className="link-container">
                <i className='bx bxs-dashboard'></i> 
                 <span className="nav-item">Dashboard</span>
            </Link>
            <Link to="/submit" className="link-container">
                <i className="bx bxs-right-arrow-square"></i> 
                <span className="nav-item">Submit</span>
            </Link>
            <Link to="/logout" className="link-container">
                <i className="bx bx-log-out" ></i> 
                <span className="nav-item">Logout</span>
            </Link>
        </div>
    );
}
