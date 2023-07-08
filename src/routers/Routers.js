import { Routes, Route , Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Productdetails from '../pages/Productdetails';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

const Routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to="home"/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path='productdetails' element={<Productdetails/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='logout' element={<Logout/>}></Route>
    </Routes>
    );
};
export default Routers;