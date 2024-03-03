import { useEffect, useState } from "react";
import {SWIGGY_DETAILS_API} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
export const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);


   const {resId} = useParams();

    useEffect(()=>{
        fetchMenuData();
    }, []);

    

    const fetchMenuData = async () => {
        const data = await fetch(SWIGGY_DETAILS_API+resId)
        const json = await data.json();

        setResInfo(json.data);
    }
 if(resInfo === null){
    return (<Shimmer/>)
 } else{
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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