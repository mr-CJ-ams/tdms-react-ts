import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";

export const Sidebar = () => {

    const [homeActive, setHomeActive] = useState(false);
    const [dashboardActive, setDashboardActive] = useState(false);
    const [submitActive, setSubmitActive] = useState(false);
    const [logoutActive, setLogoutActive] = useState(false);

    const toggleHome = () => {
        setHomeActive(true);
        setDashboardActive(false);
        setSubmitActive(false);
        setLogoutActive(false);
    };

    const toggleDashboard = () => {
        setHomeActive(false);
        setDashboardActive(true);
        setSubmitActive(false);
        setLogoutActive(false);
    };

    const toggleSubmit = () => {
        setHomeActive(false);
        setDashboardActive(false);
        setSubmitActive(true);
        setLogoutActive(false);
    };

    const toggleLogout = () => {
        setHomeActive(false);
        setDashboardActive(false);
        setSubmitActive(false);
        setLogoutActive(true);
    };

    return (
        <div className="sidebar">

            <ProfileCard
                initialName="Resort Name"
                initialTitle="Business Permit"
                initialProfileImageUrl="https://via.placeholder.com/150"
            />
            
            <Link to="/" className={`link-container ${homeActive ? "active":""}`} onClick={toggleHome} >
                <i className={`bx bxs-home `} ></i> 
                <span className={`nav-item`}>Home</span>
            </Link>

            <Link to="/dashboard" className={`link-container ${dashboardActive ? "active":""}`}  onClick={toggleDashboard}>
                <i className='bx bxs-dashboard'></i> 
                 <span className="nav-item">Dashboard</span>
            </Link>

            <Link to="/submit" className={`link-container ${submitActive ? "active":""}`}  onClick={toggleSubmit}>
                <i className="bx bxs-right-arrow-square"></i> 
                <span className="nav-item">Submit</span>
            </Link>

            <Link to="/logout" className={`link-container ${logoutActive ? "active":""}`}  onClick={toggleLogout}>
                <i className="bx bx-log-out" ></i> 
                <span className="nav-item">Logout</span>
            </Link>
        </div>
    );
}
