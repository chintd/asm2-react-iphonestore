import "./Login.css";
import bannerImg from "../img/banner1.jpg";
import {Form, Link,redirect} from"react-router-dom"
import { getUser } from "../store/GetLoginUser";
function LoginPage(){
    return<div className="login">
        <div className="login-container">
            <h1>Sign In</h1>
            <Form method='post'>
                <input name="email" type="email"placeholder="Email"></input>
                <input name="password" type="password"placeholder="Password"></input>
                <button>SIGN IN</button>
            </Form>
            <p>
                Create an account
                <Link to="/register">Sign up</Link>
            </p>
        </div>
    </div>
}
export default LoginPage
export async function action({request}){
    // lấy dữ liệu login từ form
    const data= await request.formData();
    const signInData= {
        email: data.get("email"),
        password: data.get("password")
    }
    console.log(signInData);
    // lấy dữ liệu user đăng ký trong localstorage
    const signUpUser = JSON.parse(localStorage.getItem("user"));

    console.log(signUpUser)
    if(signUpUser !==null){
        // kiểm tra xem đã đăng ký user chưa
        signUpUser.filter(user=>{
            if(user.email === signInData.email && user.password === signInData.password){
                localStorage.setItem("loginUser", JSON.stringify(user));
            }
        })
        return redirect("/")
    }
    return redirect("/register")
}