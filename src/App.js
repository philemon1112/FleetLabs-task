import React,{useState} from 'react';
import './App.css';
import Layout from './Components/Layout';
import ProductDetails from './Components/ProductDetails';

function App() {
  const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
  const [cart, setCart] = useState([])

  return (
    <Layout cartProductQuantity={cartProductQuantity} setCartProductQuantity={setCartProductQuantity} cart={cart} setCart={setCart}>
      <ProductDetails productQuantity={productQuantity} setProductQuantity={setProductQuantity} setCartProductQuantity={setCartProductQuantity} cart={cart} setCart={setCart}  />
    </Layout>
  );
}

export default App;
