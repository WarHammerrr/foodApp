import { image_cdn } from "../constants";

const RestaurantCard = (props) => {
 const { name, avgRating, cuisines, cloudinaryImageId }=props.resdata

  return (
    // <div className="h-80 w-60 border-0.5 my-1 mx-1 overflow-hidden shadow-xl shadow-gray-300 rounded-2xl p-3 hover:shadow-2xl transition-shadow duration-300  ">
     
    //   <img src={image_cdn + cloudinaryImageId} className="h-50 w-full max-h-6/10 object-cover rounded-b-sm"alt="Restaurant" />
    //   <div className="p-1">
    //   <p className="font-bold">{name}</p>
    //   <p>{avgRating} rating</p>
    //   <p className="text-pretty overflow-x-hidden">{cuisines?.join(",")}</p>
    //   </div>
    // </div>
    <div className="h-80 w-80 bg-white border border-gray-200 my-2 mx-2 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
  {/* Image */}
  <img 
    src={image_cdn + cloudinaryImageId} 
    className="h-40 w-full object-cover" 
    alt="Restaurant" 
  />

  {/* Content */}
  <div className="p-3">
    {/* Restaurant Name */}
    <p className="font-semibold text-lg text-gray-800 truncate">{name}</p>
    
    {/* Rating */}
    <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
      ⭐ {avgRating} Rating
    </p>
    
    {/* Cuisines */}
    <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>
  </div>
</div>

  );
};


export default RestaurantCard;
