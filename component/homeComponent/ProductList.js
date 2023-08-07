import { createPortal } from "react-dom";
import ProductModal from "./ProductModal";
import Backdrop from "./Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../store/popupDedail";
import { useState } from "react";
import ProductItem from "./ProductItem"
import "./ProductList.css"
function ProductList(props){
const show = useSelector(state=>state.modal.showModal);
    const dispatch = useDispatch()
    function showModalHandler(item){
        console.log(item)
        console.log(modalAction.showPopUp(item));
        dispatch(modalAction.showPopUp(item));
    }
    function hideModalHandler(){
        dispatch(modalAction.hidePopUp());
    }
    return <div className="list">
        <h3>made the hard way</h3>
        <h1>top trending products</h1>
        <ul className="item-list">
        {props.products.map(item=><li key={Math.random()}><ProductItem title={item.name} price={item.price}
        id={item['_id']["$oid"]}
        image={item.img1}
        key={item['_id']}
        category={item.category}
        description={item["short_desc"]}
        onClick={showModalHandler.bind(null,item)}/></li>)}
         </ul>
         {show &&<div>
        {createPortal(<ProductModal onHide={hideModalHandler} />, document.getElementById('overlay'))}
        {createPortal(<Backdrop onHide={hideModalHandler}/>, document.getElementById('backdrop'))}
        </div>}
        </div>
}
export default ProductList