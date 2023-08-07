import { useLoaderData } from "react-router-dom";
import Navbar from "../component/shopcomponent/Navbar"
import ShopList from "../component/shopcomponent/ShopList"
import "./ShopPage.css";
import { useState, useEffect } from "react";
function ShopPage(){
    const data = useLoaderData();    
    return <div className="shop">
        <div className="shop-title">
            <h1>SHOP</h1>
            <p>shop</p>
        </div>
        <div className="shop-container">
            <aside>
            <Navbar/>
            </aside>
            <section>
            <ShopList products={data}/>
            </section>
        </div>
    </div>
}
export default ShopPage

export async function loader({request, params}){
    // lấy ra query để gọi API và lọc ra data cần trả về
    const searchParams = new URL(request.url).searchParams;
    const category = searchParams.get('category') || "all";
    const res = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
    if(!res.ok){
        throw new Error("something wrong")
    }
    const data = await res.json();
    if(category === "all"){
        return data
    } else{
        // lọc những sản phầm có chung category
        const categoryData= data.filter(el=>{
            return el.category === category
        })
        return categoryData;
    }
}