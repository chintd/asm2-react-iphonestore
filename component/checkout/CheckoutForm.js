import { useSelector } from "react-redux";
import "./CheckoutForm.css"
function CheckoutForm(){
    // lấy dữ liệu loginuser từ localstore
    const loginUser = JSON.stringify(localStorage.getItem('loginUser'));
    // lấy ra total từ redux store
    const total = useSelector(state=>state.cart.total)
    function submitHandler(e){
        e.preventDefault();
        if(loginUser !== null && total !== 0){
            alert("Order Sucessful!!!")
        }else if( total == 0){
            alert("please add product to cart!")
        }
    }
    return <div className="form">
        <h4>BILLING DETAILS</h4>
        <form onSubmit={submitHandler}>
            <label htmlFor="fullname">FULL NAME:</label>
            <input type="text" id="fullname"placeholder="Enter your fullname here" required></input>
            <label htmlFor="email">email:</label>
            <input type="email" id="email" placeholder="Enter your email here" required></input>
            <label htmlFor="phone-number">phone number:</label>
            <input type="number" id="phone-number" required placeholder="Enter your phone number here"></input>
            <label htmlFor="address">address:</label>
            <input type="text" id="address" required placeholder="Enter your address here"></input>
            <button type="submit">Place Order</button>
        </form>
    </div>
}
export default CheckoutForm;