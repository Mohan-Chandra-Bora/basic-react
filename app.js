import React  from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantsList  } from './restaurantList';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info 

    if (!resData) {
        // You can return null or a loading spinner here
        return null;
    }
    return (
        <div className='res-card'>
            <img className='res-logo'
                alt="res-logo"
                src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

const Body = () => {
    let restaurantsArray;
    try {
      restaurantsArray = JSON.stringify(restaurantsList);
    } catch (error) {
      console.error("Error parsing JSON", error);
      return <div>Error loading restaurants</div>;
    }
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {

                /* <RestaurantCard resData= {JSON.parse(restaurantsArray)[0]}/>
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[1]} />
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[2]}/> */
                // Not using keys is bad practice <<< Index keys (Anti pattern) <<<<< Unique keys (Best Practice)
                restaurantsList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='App'>
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);