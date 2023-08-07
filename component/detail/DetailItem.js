import { useDispatch } from "react-redux";
import { useRef } from "react";
import { cartAction } from "../../store/popupDedail";
import "./DetailItem.css";
function DetailItem(props){
    const price = props.price.toString().split("").reverse();
    price.splice(3,0,".");
    price.splice(7,0,'.');
    price.reverse();
    const ref =useRef();
    const dipatch = useDispatch();
    // thêm sản phẩm vào cart sử dụng redux store 
    function addItemHandler(){
        const item = {...props.item,
            amount: ref.current.value
        };
        console.log(item)
        dipatch(cartAction.addCart(item))
    }
    return<div className="detail-item">
        <div className="item-info">
            <div className="info-img">
                <div className="img-group">
                <img src={props.image[0]}></img>
                <img src={props.image[1]}></img>
                <img src={props.image[2]}></img>
                <img src={props.image[3]}></img>
                </div>
            <img src={props.image[0]}></img>
            </div>
            <div className="info-description">
                <h1>{props.title}</h1>
                <h3 className="text-grey">{price}VND</h3>
                <p>{props.description[1]}</p>
                <div className="detail-category">
                    <h4>CATEGORY:</h4>
                    <p className="text-grey">{props.category}</p>
                </div>
                <div className="actions">
                    <input type="number" ref={ref} placeholder="QUATITY" defaultValue="1"></input>
                    <button onClick={addItemHandler}>Add To Cart</button>
                </div>
            </div>
        </div>
        <div className="text">
            <button>DESCRIPTION</button>
            <div className="content">
                <h3>PRODUCT DESCRIPTION</h3>
                <p className="text-grey">{props.description[0]}</p>
            </div>
        </div>
    </div>
}
export default DetailItem