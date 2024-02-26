import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
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
                src = {CDN_URL+ cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}