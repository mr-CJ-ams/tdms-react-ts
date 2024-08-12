import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

export const Sidebar = () => {

    const [isActive, setIsActive] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    const handleMouseEnter = (item: string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className={`sidebar ${isActive ? "active": ""}`}>
            
            <div className="menu-btn">
                <i className="bx bx-menu" onClick={toggleSidebar}></i>
            </div>
            
            <Link to="/" className="link-container">
                <i 
                    className='bx bxs-home'
                    onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}
                ></i> 
                {isActive && <span className="nav-item">Home</span>}
                {hoveredItem === "home" && !isActive && <span className="tooltip">Home</span>}
            </Link>
            <Link to="/dashboard" className="link-container">
                <i 
                    className='bx bxs-dashboard' 
                    onMouseEnter={() => handleMouseEnter("dashboard")} onMouseLeave={handleMouseLeave}
                ></i> 
                
                {isActive && <span className="nav-item">Dashboard</span>}
                {hoveredItem === "dashboard" && !isActive && <span className="tooltip">Dashboard</span>}
            </Link>
            <Link to="/submit" className="link-container">
                <i 
                    className="bx bxs-right-arrow-square" 
                    onMouseEnter={() => handleMouseEnter("submit")} onMouseLeave={handleMouseLeave}
                >
                </i> 

                {isActive && <span className="nav-item">Submit</span>}
                {hoveredItem === "submit" && !isActive && <span className="tooltip">Submit</span>}
            </Link>
            <Link to="/logout" className="link-container">
                <i 
                    className="bx bx-log-out" 
                    onMouseEnter={() => handleMouseEnter("logout")} onMouseLeave={handleMouseLeave}
                ></i> 
                {isActive && <span className="nav-item">Logout</span>}
                {hoveredItem === "logout" && !isActive && <span className="tooltip">Logout</span>}
            </Link>
        </div>
    );
}
