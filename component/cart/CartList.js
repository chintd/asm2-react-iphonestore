
import CartItem from "./CartItem";
import "./CartList.css";
import { Link } from "react-router-dom";

function CartList(props){
    
    let items = props.items;        
    return <div className="cartList">
        <table>
            <thead>
                <tr>
                <th>image</th>
                <th>product</th>
                <th>price</th>
                <th>quatity</th>
                <th>total</th>
                <th>remove</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item=>{
                return <CartItem key={item['_id']['$oid']} product={item}
                />})}       
            </tbody>
        </table>
        <div className="cartList-action">
            <Link to="/shop"> 
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                className="w-5 h-5">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                </svg>
                </i>Continue shopping </Link>
                <Link to="/checkout">Proceed to checkout
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>

                </i></Link>
        </div>
    </div>
}
export default CartList