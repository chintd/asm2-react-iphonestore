import { NavLink,Form, useLoaderData } from "react-router-dom";
import "./Navigation.css";
import {counterAction} from "../store/couter";
import { redirect } from "react-router-dom";
function Navigation(){
    // lấy ra loginuser từ loader để hiển thị nút logout
    const user = useLoaderData();
    function increHandler(){
       redirect("/shop");
        // location.replace("/shop")
    }
    return<nav className="navbar">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item ">
            <div>
                <NavLink activeclassname="active" to="/" end>Home</NavLink>
                <NavLink activeclassname="active" to="/shop">Shop</NavLink>
            </div>
            </li >
            <li className="nav-item">
                <NavLink to='/'>BOUTIQUE</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeclassname="active" to='/cart'>
                    <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" fill="currentColor" 
                    className="w-5 h-5">
                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>

                </i>Cart</NavLink>
                <NavLink activeclassname="active" to='/login'>
                    <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-5 h-5">
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                </i>{user ? user.fullname :"Login"}</NavLink>
                {user && <Form action="/logout" method="post"><button>(Logout)</button></Form>}
            </li>       
        </ul>
        <button type="button" onClick={increHandler}>Incre</button>
        </div>
    </nav>
}
export default Navigation