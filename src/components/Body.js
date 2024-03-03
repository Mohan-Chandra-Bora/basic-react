import { useState, useEffect } from "react";
import { restaurantsList } from "../utils/mockData";
import { RestaurantCard } from "./restaurantCard";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
export const Body = () => {
    let [stateRestaurantsList, setStateRestaurantsList] = useState([])
    let [filteredRestaurantList, setFilteredRestaurantList] = useState([])
    let [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(`${SWIGGY_API}`);

        const json = await data.json();

        setStateRestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    // Conditional rendering
    return stateRestaurantsList.length === 0 ? <Shimmer count={16}/> :(
        <div className='body'>
            <div className="search">
                <input type="text" className="search-text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}></input>
                <button className="search-button" onClick={()=>{
                    console.log({searchText});
                    const filteredRestaurantList = stateRestaurantsList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredRestaurantList);

                }}>Search</button>
            </div>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filteredListOnRating = stateRestaurantsList.filter(res => res.info.avgRating >= 4.8);
                    setStateRestaurantsList(filteredListOnRating);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                /* <RestaurantCard resData= {JSON.parse(restaurantsArray)[0]}/>
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[1]} />
                <RestaurantCard resData= {JSON.parse(restaurantsArray)[2]}/> */
                // Not using keys is bad practice <<< Index keys (Anti pattern) <<<<< Unique keys (Best Practice)
                filteredRestaurantList.map(restaurant =>
                    <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    )
                }
            </div>

        </div>
    )
}

export default Body;