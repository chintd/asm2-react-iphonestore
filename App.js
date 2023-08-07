import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import HomePage from './pages/HomePage';
import ShopPage, {loader as loadProduct} from './pages/ShopPage';
import DetailPage,{loader as loadDetail} from './pages/DetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage, {action as loginAction} from './pages/LoginPage';
import RegisterPage,{action as signUpAction} from './pages/RegisterPage';
import { getUser } from './store/GetLoginUser';
import { Logout } from './store/Logout';
function App() {
  const router = createBrowserRouter([
    {path:"/",
  element:<Layout/>,
  loader: getUser,
  children: [
    {index:true, element:<HomePage/>},
    {path:"/shop",element:<ShopPage/>, loader: loadProduct},
    {path:"/detail/:productId",element:<DetailPage/>,loader:loadDetail },
    {path:"/cart",element:<CartPage/>},
    {path:"/checkout",element:<CheckoutPage/>},
    {path:"/login",element:<LoginPage/>, action: loginAction},
    {path:"/register",element:<RegisterPage/>, action: signUpAction},
    {path:"/logout", action: Logout}
  ]
  
}
  ])
  return (<RouterProvider router={router}/>
  );
}

export default App;
