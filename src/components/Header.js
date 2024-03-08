import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import  {Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className='header'>
            <div className='logo-container'>
                <img alt="logo" className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢":"🔴"} </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="btn-login-logout"
                    onClick={()=>{
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}