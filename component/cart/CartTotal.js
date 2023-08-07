
import "./CartTotal.css";
function CartTotal(props){
    // lay total tu props
    let total = props.total;
    console.log(total,'cart')
    //chuyen ve string va them dau "."
    let totalDot = total.toString().split("").reverse();
    totalDot.splice(3,0,'.');
    totalDot.splice(7,0,'.');
    totalDot.reverse();
    
    return <div className="carttotal">
        <h4>CART TOTAL</h4>
        <div className="carttotal-sub">
            <h5>SUBTOTAL</h5>
            <p>{totalDot}VND</p>
        </div>
        <hr/>
        <div className="carttotal-total">
            <h4>TOTAL</h4>
            <p>{totalDot}VND</p>
        </div>
        <div className="carttotal-action">
            <input type="text" placeholder="Enter your coupon"></input>
            <button>
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                className="w-5 h-5">
                <path fillRule="evenodd" 
                d="M14 6a2.5 2.5 0 00-4-3 2.5 2.5 0 00-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14zm-1-1.5a1 1 0 01-1 1h-1v-1a1 1 0 112 0zm-6 0a1 1 0 001 1h1v-1a1 1 0 00-2 0z" clipRule="evenodd" />
                <path d="M9.25 10.5H3v4.75A2.75 2.75 0 005.75 18h3.5v-7.5zM10.75 18v-7.5H17v4.75A2.75 2.75 0 0114.25 18h-3.5z" />
                </svg>
                </i>
                Apply coupon
            </button>     
        </div>
    </div>
}
export default CartTotal