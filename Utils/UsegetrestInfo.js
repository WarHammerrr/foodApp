import { useState, useEffect } from "react";
import { Rest_CDN } from "../constants";
function getInfo(id) {
  const [restaurants, setRestaurants] = useState(null);
  async function fetchData() {
    try {
      const data = await fetch(Rest_CDN + id);
      const json = await data.json();

     // setRestaurants(json?.data?.cards[2]?.card?.card?.info);
      setRestaurants(json?.data);
     
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return restaurants;
}
export default getInfo;
