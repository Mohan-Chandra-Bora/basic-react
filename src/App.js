import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import Error from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {
    return (
        <div className='App'>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
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
            }
        ],
        errorElement: <Error />
    }
])
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);