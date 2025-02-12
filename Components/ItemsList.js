
import { image_cdn,IMG } from "../constants"

const ItemsList=(props)=>{
    const {name,price,defaultPrice,description,imageId}=props.items
    return (


<div className="flex justify-between items-center mx-auto w-6/12 border-b-1 p-2 text-left ">

< div className="w-9/12 " ><span className="font-semibold font-sans">{name}</span><span className="text-2xs font-semibold"> - ₹{(price|| defaultPrice) /100}</span>
<p className="my-1 text-xs">{description}</p></div>
<div className="w-3/12 flex justify-end"><img src={image_cdn + imageId} className="w-30 h-20 object-cover "/>
<button className="border-b-amber-50 p-1 bg-black text-white absolute shadow-xl ">Add</button></div>

</div>
)

}
export default ItemsList