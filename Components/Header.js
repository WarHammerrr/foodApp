//import { IMG } from "../constants";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router";

const title = <img className="h-20 p-1" alt="logo" src={logo} />;
const Header = () => {

  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="flex bg-teal-400 text-white shadow-md rounded-b-lg">
      {title}
      <div className="my-2 mx-150">
        <ul className="flex">
         <Link to="/"><li className="p-5">Home</li></Link> 
          <Link to="/contact"><li className="p-5">Contact</li></Link>
          <Link to="/about"><li className="p-5" >About</li></Link>
         <Link to="/about"><li className="p-5" >Cart</li></Link> 
        </ul>
      </div>
    </div>
  );
};
export default Header;
