import { Routes, Route } from "react-router";
import { useEffect } from "react";
import Navbar from "./componets/Navbar";
import Register from "./componets/Register";
import Login from "./componets/Login";
import Home from "./componets/Home";
import { useDispatch } from "react-redux";
import Carrito from "./componets/Carrito";
import { effectLogin } from "./states/usario";
import CardDetail from "./commons/CardDetail";
import { effectProducts } from "./states/productos";
import { cart } from "./states/cart";
import { useSelector } from "react-redux";
import Footer from "./componets/Footer";
import SendPage from "./componets/SendPage";

/* Renderizado condicional, admin y carrito si no hay un User loggeado */

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(effectLogin())
      .then((res) => {
        console.log("1", res);
      })
      .catch((err) => console.log(err));
  }, []);
  const usuario = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(effectProducts())
      .then((res) => {
        console.log("2", res);
      })
      .catch((err) => console.log(err));
  }, []);
<<<<<<< HEAD
  useEffect(()=>{dispatch(cart())
    .then((res)=>{console.log("3",res)})
    .catch(err=>console.log(err))
  }, [usuario])

=======
  useEffect(() => {
    dispatch(cart())
      .then((res) => {
        console.log("3", res);
      })
      .catch((err) => console.log(err));
  }, [usuario]);
>>>>>>> 2ac2db228e9af498afd47b706ffe7e30c7a9f0a3
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<CardDetail />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/datos_de_envio" element={<SendPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*
Las routes quedan aca hasta que estén listos los componentes a renderizar 
<Routes>
        
        <Route path="/register" element={"register"} />
        <Route path="/login" element={"login"} />
        <Route path="/admin" element={"admin"} />
        <Route path="/cart" element={"cart"} />

        <Route path="/sku" element={"productCard"} />
</Routes>
*/
