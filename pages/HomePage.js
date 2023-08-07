import { useCallback, useEffect, useState } from "react"
import Banner from "../component/homeComponent/Banner"
import ProductList from "../component/homeComponent/ProductList"
import Products from "../component/homeComponent/Products"
import "./HomePage.css"
import Info from "../component/homeComponent/Info"
import LiveChat from "../component/homeComponent/LiveChat"
function HomePage(){
    // gọi API hiển thị sản phẩm khi load trang lần đầu tiên
    const[products, setProducts]=useState([]);
    const fetchProduct = useCallback(async()=>{
        const res = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
        if(!res.ok){
            throw new Error("something wrong")
        }
        const data = await res.json();
        setProducts(data)
    })
    useEffect(()=>{
        fetchProduct()
    },[])
    const [showChat,setShowChat]= useState(false);
    function showChatHandler(){
        setShowChat(true)
    }
    function hideChatHandler(){
        setShowChat(false)
    }
    return <div className="home">
        <Banner/>
        <Products/>
        <ProductList products={products}/>
        <Info/>
        {showChat ? <LiveChat onHide={hideChatHandler}/> : <button className="position-fixed"
        onClick={showChatHandler}>
            <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" strokeWidth="1.5" 
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
   </i></button>}
    </div>
}
export default HomePage