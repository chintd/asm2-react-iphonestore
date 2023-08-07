import "./Banner.css";
import BannerImg from "../../img/banner1.jpg";
import {Link} from "react-router-dom"
function Banner(){
    return <div className="banner">
        <img src={BannerImg} alt="banner"></img>
        <div className="banner-content">
            <h3>NEW INSPIRATION 2020</h3>
            <h1>20% OFF ON NEW SEASON</h1>
            <div className="button">
                <Link to="/shop">Browse Collection</Link>
            </div>
        </div>
    </div>
}
export default Banner