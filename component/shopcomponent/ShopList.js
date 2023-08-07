import ShopItem from "./ShopItem";
import "./ShopList.css";
function ShopList(props){
    return <div className="shoplist">
        <div className="search">
            <input type="text" name='search' placeholder="Enter Search Here"></input>
            <button >Default sorting</button>
        </div>
    <ul className="shop-item-list">
    {/* map qua array product được truyền từ props để hiển thị shopitem  */}
    {props.products.map(item=><li key={item['_id']["$oid"]}><ShopItem title={item.name} price={item.price}
    id={item['_id']["$oid"]}
    image={item.img1} 
    category={item.category}
    description={item['long_desc']}/></li>)}
     </ul>
    </div>
}
export default ShopList