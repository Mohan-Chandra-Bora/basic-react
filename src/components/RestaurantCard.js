import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info 

    if (!resData) {
        // You can return null or a loading spinner here
        return null;
    }
    return (
        <div className="m-4 p-4 w-52 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className='px-2 py-1 m-1 rounded-md align-middle'
                alt="res-logo"
                src = {CDN_URL+ cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-sm">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export const withAggregatedDiscountInfo = (WrappedComponentRestaurantCard) => {
    return (props) => {
        const { resData } = props;
        const {header, subHeader} = resData?.info?.aggregatedDiscountInfoV3;
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{`${header }` + `${subHeader != undefined ? subHeader : ""}`}</label>
                <WrappedComponentRestaurantCard {...props} />
            </div>
        )
    }
}