
import "./ProductItem.css";

function ProductItem(props){
    
    // const [show, setshow] = useState(false)
    const price = props.price.toString().split("").reverse();
    price.splice(3,0,".");
    price.splice(7,0,'.')
    price.reverse()
    // function showModalHandler(){
    //     setshow(true)
    // }
    // function hideModalHandler(){
    //     setshow(false)
    // }
    return<div className="item" onClick={props.onClick}>
        <img src={props.image} alt=""></img>
        <div className="item-content">
            <h4>{props.title}</h4>
            <p className="price">{price}VND</p>
        </div>
       
    </div>
}
export default ProductItem