import { useEffect, useState } from "react";
import { SWIGGY_DETAILS_API } from "./constants";
const useResturantMenu = (resId) => {

    const [resInfo, setResInfo]= useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(SWIGGY_DETAILS_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;

}

export default useResturantMenu;