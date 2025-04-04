//import { IMG } from "../constants";
import cart from "../assets/img/cart.png"
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router";
import {useSelector} from "react-redux"


const title = 
<img className="h-20 p-1" alt="logo" src={logo} />;


const Header = () => {

  const cartItems=useSelector((store)=>{ return store.cart.items} )


  return (
    <div className="grid grid-flow-col bg-teal-400 text-white shadow-md rounded-b-lg ">
   <div className="col-span-2 flex items-center"><img className="h-16 mx-2 p-1" src={logo} alt="logo"></img><h1 className="text-xl font-mono font-bold">EatNow</h1></div>  
      <div className="col-span-10 justify-items-end mr-10 items-center">
        <ul className="flex font-semibold font-sans">
          <Link to="/">
            <li className="p-5">Home</li>
          </Link>
          <Link to="/contact">
            <li className="p-5">Contact</li>
          </Link>
          <Link to="/about">
            <li className="p-5">About</li>
          </Link>
          <Link to="/cart">
           <li className="p-5 font-bold flex text-gray-100"><img  className="h-8" src={cart} alt="cart"/> ({cartItems?.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
