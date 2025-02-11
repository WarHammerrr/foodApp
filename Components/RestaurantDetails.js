import useGetRestInfo from "../Utils/UsegetrestInfo";
import { useParams } from "react-router";
import IMG_CDN from "../constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurants = useGetRestInfo(id);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <>
      <img src={IMG_CDN + restaurants.cloudinaryImageId}></img>
      <h2>{restaurants.name}</h2>
      <h3>{restaurants.city}</h3>
      <h4>Cost:{restaurants.costForTwoMessage}</h4>
    </>
  );
};
export default RestaurantDetails;
