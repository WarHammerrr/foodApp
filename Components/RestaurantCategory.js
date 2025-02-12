import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;
  const[showitem,setShowitem]=useState(false)
  const handleClick=()=>{
if(showitem){
  setShowitem(false)
}
else{
  setShowitem(true)
}
  }
  return (
    <>
      <div onClick={handleClick} className="flex w-6/12 bg-gray-100  mx-auto justify-between my-2 shadow-xl h-10 p-1">
        {/*accordion header*/}
        <h4 className="font-medium">
          {title}({itemCards.length})
        </h4>
        <span>▼</span>
      </div>
      {/*accordian body */}
    { showitem && itemCards.map((item)=>(<ItemsList items={item?.card?.info} key={item?.card?.info?.id}/>))}
</>
    )}

 
export default RestaurantCategory;
