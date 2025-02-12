import useGetRestInfo from "../Utils/UsegetrestInfo";
import { useParams } from "react-router";
import IMG_CDN from "../constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurants = useGetRestInfo(id);
 
const {name,cloudinaryImageId,city,costForTwoMessage}=restaurants?.cards[2]?.card?.card?.info ||{}
// console.log(restaurants?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const categories=restaurants?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

 return !restaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center my-6">
      <h2 className="font-bold text-lg">{name}</h2>
      <h4 className="font-medium">Cost:{costForTwoMessage}</h4>
      
    {/*accordions*/}

    {categories.map(x => <RestaurantCategory  data={x?.card?.card} key={x?.card?.card?.categoryId}/>)}
    </div>
    </>
  );
};
export default RestaurantDetails;
