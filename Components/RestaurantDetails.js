import useGetRestInfo from "../Utils/UsegetrestInfo";
import { useParams } from "react-router";
import IMG_CDN from "../constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurants = useGetRestInfo(id);
 
const {name,cloudinaryImageId,city,costForTwoMessage}=restaurants?.cards[2]?.card?.card?.info ||{}
 const items=restaurants?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||{}
 //console.log(restaurants?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR)
  return !restaurants ? (
    <Shimmer />
  ) : (
    <>
       <img src={IMG_CDN + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{city}</h3>
      <h4>Cost:{costForTwoMessage}</h4>
      { items?.length > 0 && items.map((i)=>(<p>{i?.card?.info?.name}</p>)

      )}
    </>
  );
};
export default RestaurantDetails;
