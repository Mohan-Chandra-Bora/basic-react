import { restaurantsList } from "../utils/mockData";
import { RestaurantCard } from "./restaurantCard";
export const Body = () => {
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

export default Body;