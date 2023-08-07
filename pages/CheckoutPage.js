import CheckoutForm from "../component/checkout/CheckoutForm"
import CheckoutTotal from "../component/checkout/CheckoutTotal"
import "./Checkout.css"
function CheckoutPage(){
    return<div className="checkout"> 
        <div className="checkout-title">
            <h1>Checkout</h1>
            <p>home/cart/<span className="text-grey">checkout</span></p>
        </div>
        <div className="checkout-container">
            <CheckoutForm/>
        <CheckoutTotal/>
        </div>
     </div>
}
export default CheckoutPage