import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu";
export const RestaurantMenu = () => {

  const {resId} = useParams();
  const resInfo = useResturantMenu(resId);

 if(resInfo === null){
    return (<Shimmer/>)
 } else{
    console.log(resInfo);
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.id
    return  (
        <div className="menu">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=> (<li key = {item.card.info.id}>{item.card.info.name}</li>))}
               
            </ul>
        </div>
    )
 }
   
}