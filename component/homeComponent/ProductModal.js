import "./ProductModal.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ProductModal(props){
    const item = useSelector(state=>state.modal.item)
    const price = item.price.toString().split("").reverse();
    price.splice(3,0,".");
    price.splice(7,0,'.')
    price.reverse()
    return<div className='container'>
        <div className="modal">
            <div className="image">
            <img src={item.img1} alt=""/>
            </div>
            <div className="content">
                <button type="button" onClick={props.onHide}>x</button>
                <h3>{item.name}</h3>
                <p className="price">{price} VND</p>
                <p className="des">{item['short_desc']}</p>
                <Link to={`/detail/${item['_id']['$oid']}`}><button type="button">
                    <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-5 h-5">
                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>

                    </i>
                    View detail</button></Link>
            </div>
        </div>
        </div>
}
export default ProductModal