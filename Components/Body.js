import { useState, useEffect, cache } from "react";
// import restaurantsList from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UseOnline from "../Utils/UseOnline";

const Body = () => {
  const [InputValue, setInputValue] = useState("");
  const [newrestaurants, setNewrestaurants] = useState([]);
  const {isOnline} = UseOnline();
 

  
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  useEffect(
   ()=>{
    async function fetchData() {
    try {
     
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.3730192&lng=78.547636&carousel=true&third_party_vendor=1"
        
      );

      const json = await data.json();
     
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurants) {
        setNewrestaurants(restaurants);
        setFilteredrestaurants(restaurants);
       
      }
      
    } catch (err) {
      console.log(err);
    }
  }
    fetchData()
   }
  , []);
  
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const filterrestaurants = (newrestaurants, InputValue) => {
    return newrestaurants.filter((rest) =>
      rest?.info?.name?.toLowerCase()?.includes(InputValue.toLowerCase())
    );
  };
if(isOnline===false){
  return <h1>You are offline</h1>
}

  
  return (!newrestaurants || newrestaurants.length===0) ? (
    <Shimmer />
  ) : (
    <div className="bg-teal-50 text-gray-800">
      <input
        type="text"
        className="mx-3  my-1 p-1 border-1 rounded-lg"
        placeholder="enter here"
        value={InputValue}
        onChange={onChangeHandler}
      ></input>
      <button
        className="px-2 py-1 border-1 rounded-lg bg-teal-50 "
        onClick={() => {
          const data = filterrestaurants(newrestaurants, InputValue);
          setFilteredrestaurants(data);
        }}
      >
        search
      </button>

      <div className="flex flex-wrap mx-2 ">
        {filteredrestaurants?.length === 0 && (
          <p>No restaurants match your search.</p>
        )}

        {
        // filteredrestaurants != null &&

          filteredrestaurants.map((x) => {
            return <Link to={"/restaurant/"+x.info.id} key={x.info.id}>
              
              <RestaurantCard {...x.info}  />
              </Link>;
          })}
      </div>
    </div>
  );
};

export default Body;
