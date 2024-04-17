import { useState, useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import  {Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector }  from "react-redux";

export const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subsribing to the store using a Selector
    const cartItems = useSelector((store)=> store.cart.items);


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
                    <li className="px-4">
                        <Link to="/cart">
                            Cart - ({cartItems.length} items)
                        </Link> 
                    </li>
                    <button className="btn-login-logout"
                    onClick={()=>{
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}
                    >{btnName}</button>
                    <li className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}