import { redirect } from "react-router-dom"

export function Logout(){
    console.log('logout')
    localStorage.removeItem("loginUser")
    return redirect('/')
}