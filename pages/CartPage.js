
import { useSelector } from "react-redux";
import CartList from "../component/cart/CartList";
import CartTotal from "../component/cart/CartTotal";
import "./CartPage.css";

function CartPage(){
    let total = JSON.parse(localStorage.getItem('total'));
    let storeTotal=useSelector(state=>state.cart.total)
    if(total === null){
        total =storeTotal
    }
    let items = JSON.parse(localStorage.getItem('cart')) ;
    let storeItems=useSelector(state=>state.cart.items)
    if(items ===null){
        items =storeItems
    }
    return <div className="cart">
         <div className="cart-title">
            <h1>Cart</h1>
            <p className="text-grey">Cart</p>
        </div>
            <h4>SHOPPING CART</h4>
        <div className="cart-container">
            <CartList items={items}/>
            <CartTotal total={total}/>
        </div>
    </div>
}
export default CartPage