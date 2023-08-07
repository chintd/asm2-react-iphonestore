import { useSelector } from "react-redux";
import "./CheckoutTotal.css";
function CheckoutTotal(){
    // lấy items và total từ redux store để hiển thị tổng tiền
    let total = useSelector(state=>state.cart.total);
    const items = useSelector(state=>state.cart.items);
    total = total.toString().split("").reverse();
    total.splice(3,0,'.');
    total.splice(7,0,'.');
    total.reverse()
    return <div className="checkoutTotal">
        <h4>YOUR ORDER</h4>
        {items.map(el=>{
            const price= el.price.toString().split("").reverse();     
            price.splice(3,0,'.');
            price.splice(7,0,'.');
            price.reverse()
            return <div>
                <div className="display-flex">
                <p>{el.name}</p>
                <p className="text-grey">{price}x{el.amount}</p>
                </div>
                <hr/>
                </div>
        })}
        <div className="display-flex">
            <h5>TOTAL</h5>
            <p>{total}</p>
        </div>
    </div>
}
export default CheckoutTotal;