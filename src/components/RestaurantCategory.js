import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, currentIndex, showIndex}) => {
    // const [showItems, setShowItems] = useState(false);

   
    const arrow1="⬇️";
    const arrow2="⬆️";
    const handleClick = () => {
        // setShowItems(!showItems);
        // setShowIndex();
        if (currentIndex === showIndex) {
            setShowIndex(null); // This will collapse the currently open accordion
        } else {
            setShowIndex(currentIndex); // This will expand the accordion that was clicked
        }
        
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4" >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
                    <span>{showItems ? arrow2 : arrow1}</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
    
}

export default RestaurantCategory;