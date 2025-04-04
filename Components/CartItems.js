import { useSelector } from "react-redux"
import ItemsList from "./ItemsList"
import { clearCart } from "../Utils/CartSlice"
import { useDispatch } from "react-redux"
const CartItems=()=>{
    const CartItems=useSelector((store)=> store.cart.items)
    const dispatch=useDispatch()
    function handleClick(){
   dispatch(clearCart())
    }
return (
<div className="my-5">
    <div className="flex justify-center items-center"><h1 className="font-bold text-xl">Cart Items</h1>
    <button className="mx-3 p-2 bg-teal-400  text-white rounded-lg font-bold cursor-pointer " onClick={handleClick}>Clear Cart</button>
    
    </div>
{CartItems.map((item,index)=> <ItemsList items={item}/>)}

</div>

)

}
export default CartItems