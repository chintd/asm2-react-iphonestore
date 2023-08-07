import { useLoaderData, useParams } from "react-router-dom";
import DetailItem from "../component/detail/DetailItem";
import RelateItem from "../component/detail/RelateItem";
import "./DetailPage.css"
function DetailPage(){
    const {item, category} = useLoaderData();
    const params = useParams();
    const id=params.productId
    return<div className="detail">
        {item.map(i=><DetailItem 
        item={i}
        key={id}
        id={id}
        title={i.name}
        price={i.price}
        image={[i.img1,i.img2,i.img3,i.img4]}
        category={i.category}
        description={[i["long_desc"], i["short_desc"]]}/>)}
        <RelateItem relate={category}/>
    </div>
}
export default DetailPage
export async function loader({request, params}){
    const id = params.productId;
    const res = await fetch ("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
    if(!res.ok){
        throw new Error("could not find product")
    }
    const data = await res.json();
    console.log(data)
    const item =await data.filter(el=>{
        // lọc ra phần tử có id = :productId
        if(el['_id']["$oid"] === id){
            return el
        }
    })
    // lọc những phần tử có chung category
    const category=await data.filter(el=>{
        if(el.category === item[0].category){
            return el
        }
    })
    return {
        item:item,
        category: category
    }
}