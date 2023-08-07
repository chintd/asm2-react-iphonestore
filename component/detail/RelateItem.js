import ShopItem from "../shopcomponent/ShopItem";
import "./RelateItem.css";
function RelateItem(props){
    return <div className="relate">
        <h3>RELATED PRODUCTS</h3>
        <div className="relate-container">
            {props.relate.map(item=><ShopItem 
            title={item.name} price={item.price}
            id={item['_id']["$oid"]}
            image={item.img1}
            key={item['_id']["$oid"]}
            category={item.category}
            />)}
        </div>
    </div>
}
export default RelateItem