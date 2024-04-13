import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import Error from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';
const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    // authentication
    useEffect(()=>{
        //  Make an api call to send username and password
        const data = {
            name: "Mohan Bora"
        };
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className='App'> 
                <Header />
                <Outlet />        
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter =  createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
])
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);