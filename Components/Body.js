import { useState, useEffect, cache } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UseOnline from "../Utils/UseOnline";
import { MAIN_API } from "../constants";

const Body = () => {
  const [InputValue, setInputValue] = useState("");
  const [newrestaurants, setNewrestaurants] = useState([]);
  const { isOnline } = UseOnline();

  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(MAIN_API);

        const json = await data.json();

        const restaurants =
          json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (restaurants) {
          setNewrestaurants(restaurants);
          setFilteredrestaurants(restaurants);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const filterrestaurants = (newrestaurants, InputValue) => {
    return newrestaurants.filter((rest) =>
      rest?.info?.name?.toLowerCase()?.includes(InputValue.toLowerCase())
    );
  };
  if (isOnline === false) {
    return <h1>You are offline</h1>;
  }

  return !newrestaurants || newrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-gray-800 my-2 bg-gray-100  ">
      <div className="flex justify-center items-center my-3">
        <input
          type="text"
          className="mr-3  ml-1 my-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter here"
          value={InputValue}
          onChange={onChangeHandler}
        />
        <button
          className="p-2 h-10  bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 cursor-pointer"
          onClick={() => {
            const data = filterrestaurants(newrestaurants, InputValue);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap  justify-center items-center my-2 ">
        {filteredrestaurants?.length === 0 && (
          <p>No restaurants match your search.</p>
        )}

        {
          
          filteredrestaurants.map((x) => {
            return (
              <Link to={"/restaurant/" + x.info.id} key={x.info.id}>
                <RestaurantCard resdata={x.info} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
