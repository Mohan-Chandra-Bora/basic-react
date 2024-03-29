import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import  {Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className='flex justify-between'>
            <div className='logo-container'>
                <img alt="logo" className='w-56' src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢":"🔴"} </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
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