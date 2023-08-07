import "./Products.css"
import {Link} from "react-router-dom"
function Products(props){
    return <div className="product">
        <div className="title">
        <h3>Carefully created colections</h3>
        <h1>browse our categories</h1>
        </div>
       <div className="propduct-item">
            <Link to="/shop">
                <img src={require("../../img/product_1.png")}/>
            </Link>

            <Link to="/shop">
                <img src={require("../../img/product_2.png")}/>
            </Link>
       </div>
       <div className="propduct-item">
            <Link to="/shop">
                <img src={require("../../img/product_3.png")}/>
            </Link>
            <Link to="/shop">
                <img src={require("../../img/product_4.png")}/>
            </Link>
            <Link to="/shop">
                <img src={require("../../img/product_5.png")}/>
            </Link>
            </div>
    </div>
}
export default Products