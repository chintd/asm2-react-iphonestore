import "./Register.css";
import {Form, Link,redirect} from"react-router-dom"

function RegisterPage(){
   
        return<div className="register">
            <div className="register-container">
                <h1>Sign In</h1>
                <Form method='post'>
                <input name="fullname" type="text"placeholder="Fullname"></input>
                    <input name="email" type="email"placeholder="Email"></input>
                    <input name="password" type="password"placeholder="Password"></input>
                    <input name="phone" type="number"placeholder="Phone"></input>
                    <button>SIGN UP</button>
                </Form>
                <p>
                    register
                    <Link to="/login">Click</Link>
                </p>
            </div>
        </div>   
}
export default RegisterPage;
export async function action({request}){
    // lấy dữ liệu đăng ký từ form
    const data= await request.formData();
    const signUpData= {
        email: data.get("email"),
        password: data.get("password"),
        fullname: data.get("fullname"),
        phone: data.get("phone")
    }
    console.log(signUpData)
    // kiểm tra array user có tồn tại chưa, nếu chưa thì set thành []
    let user = localStorage.getItem('user');
    if(user === null){
        localStorage.setItem('user', [])
    }
    user = localStorage.getItem('user');
    // thêm người đăng ký mới vào array user
    localStorage.setItem("user",JSON.stringify([...user,signUpData]));
    return redirect("/login");
}