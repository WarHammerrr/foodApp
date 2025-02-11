import { image_cdn } from "../constants";

const RestaurantCard = ({ name, avgRating, cuisines, cloudinaryImageId }) => {
 
  
  return (
    <div className="h-80 w-60 border-0.5 my-1 mx-1 overflow-hidden shadow-xl shadow-gray-300 rounded-2xl p-3 hover:shadow-2xl transition-shadow duration-300  ">
     
      <img src={image_cdn + cloudinaryImageId} className="h-50 w-full max-h-6/10 object-cover rounded-b-sm"alt="Restaurant" />
      <div className="p-1">
      <p className="font-bold">{name}</p>
      <p>{avgRating} rating</p>
      <p className="text-pretty overflow-x-hidden">{cuisines?.join(",")}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
