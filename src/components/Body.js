import { useState } from "react";
import { restaurantsList } from "../utils/mockData";
import { RestaurantCard } from "./restaurantCard";
export const Body = () => {
    let [stateRestaurantsList, setStateRestaurantsList] = useState(restaurantsList)
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filteredListOnRating = restaurantsList.filter(res => res.info.avgRating >= 4.8);
                    setStateRestaurantsList(filteredListOnRating);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                /* <RestaurantCard resData= {JSON.parse(restaurantsArray)[0]}/>
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[1]} />
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[2]}/> */
                // Not using keys is bad practice <<< Index keys (Anti pattern) <<<<< Unique keys (Best Practice)
                stateRestaurantsList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>

        </div>
    )
}

export default Body;