import { Link, useSearchParams } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
   // tìm ra loại category của page và thay đổi class thành active khi click
    const [searchParams,setSearchParams] = useSearchParams();
    const category = searchParams.get('category') || "all";
    return <div className="nav">
        <h1>CATEGORIES</h1>
        <div className="apple">
            <h4>apple</h4>
            <Link to="?category=all"
            className={category === 'all'? "active":''}>All</Link>
        </div>
        <div className="category">
            <h4>iphone & mac</h4>
            <Link to='?category=iphone' 
          className={category === 'iphone'? "active":''}>IPhone</Link>
             <Link to='?category=ipad' 
          className={category === 'ipad'? "active":''}>IPad</Link>
             <Link to='?category=macbook' 
          className={category === 'macbook'? "active":''}>Macbook</Link>
        </div>
        <div className="category">
            <h4>wireless</h4>
            <Link to='?category=airpod' 
          className={category === 'airpod'? "active":''}>Airpod</Link>
             <Link to='?category=watch' 
          className={category === 'watch'? "active":''}>Watch</Link>
        </div>
        <div className="category">
            <h4>Orther</h4>
            <Link to='?category=mouse' 
          className={category === 'mouse'? "active":''}>Mouse</Link>
             <Link to='?category=keyboard' 
          className={category === 'keyboard'? "active":''}>Keyboard</Link>
             <Link to='?category=orther' 
          className={category === 'orther'? "active":''}>Orthers</Link>
        </div>
    </div>

}
export default Navbar