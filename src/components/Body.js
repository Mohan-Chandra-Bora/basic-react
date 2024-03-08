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
            <div className="flex">
                <div className="search m-4 p-4">
                    <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurantList = stateRestaurantsList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurantList(filteredRestaurantList);

                    }}>Search</button>
                    </div>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                        const filteredListOnRating = stateRestaurantsList.filter(res => res.info.avgRating >= 4.8);
                        setStateRestaurantsList(filteredListOnRating);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className='flex flex-wrap'>
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