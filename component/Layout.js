import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"

function Layout(){
    return<div>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
}
export default Layout