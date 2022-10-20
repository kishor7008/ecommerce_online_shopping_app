
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './screen/ProductDetails';
  import CartScreen from './screen/CartScreen';
  import LoginScreen from './screen/LoginScreen';
  import RegisterScreen from './screen/RegisterScreen';
  import ProfileScreen from './screen/ProfileScreen';
  import ShippingScreen from './screen/ShippingScreen';
  import PaymentScreen from './screen/PaymentScreen';
  import PlaceOrderScreen from './screen/PlaceOrderScreen';
  import OrderScreen from './screen/OrderScreen';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <main>
      <Container>
       
      
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart/:id" element={<CartScreen />}></Route>
        <Route path="/cart" element={<CartScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/login/register" element={<RegisterScreen />}></Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="login/shipping" element={<ShippingScreen />}></Route>
        <Route path="payment" element={<PaymentScreen />}></Route>
        <Route path="placeorder" element={<PlaceOrderScreen />}></Route>
        <Route path="order/:id" element={<OrderScreen />}></Route>
        </Routes>
        </Container>
    </main>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
