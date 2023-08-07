import "./ShopItem.css";
import { Link } from "react-router-dom";
function ShopItem(props){ 
    // chuyển đổi số thành chuổi và thêm "."
    const price = props.price.toString().split("").reverse();
    price.splice(3,0,".");
    price.splice(7,0,'.')
    price.reverse()

    return<Link className="shopitem" to={`/detail/${props.id}`}>
        <img src={props.image} alt=""></img>
        <div className="shopitem-content">
            <h4>{props.title}</h4>
            <p className="price">{price}VND</p>
        </div>     
    </Link>
}
export default ShopItem