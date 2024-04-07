import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
export const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const {resId} = useParams();
  const resInfo = useResturantMenu(resId);

 if(resInfo === null){
    return (<Shimmer/>)
 } else{
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return  (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold text-lg">
                {cuisines.join(", ")}
            </p>
            {categories.map((category, index)=> 
                <RestaurantCategory 
                key={category.card?.card?.title} 
                data={category.card?.card}
                showItems={index === showIndex}
                // setShowIndex={()=> setShowIndex(index)}
                setShowIndex={setShowIndex}
                currentIndex={index}
                showIndex={showIndex}
                />
            )}
        </div>
    )
 }
   
}