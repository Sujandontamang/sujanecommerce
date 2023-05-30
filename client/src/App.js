
import './App.css';
import Footer from './components/footer/Footer';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import Signin from './components/sign up-sign in/Signin';
import Signup from './components/sign up-sign in/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbaar></Navbaar>
      <Newnav />
     <Routes>
     <Route path="/" element={<Maincomp />}/>
     <Route path="/login" element={<Signin/>}/>
     <Route path="/register" element={<Signup/>}/>
     <Route path="/getproductsone/:id" element={<Cart/>}/>
     <Route path="/buynow" element={<Buynow/>}/>
     </Routes>
     
      
      <Footer />
    </>
  );
}

export default App;
