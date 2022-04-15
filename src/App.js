import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/AccountPage/Account";
import Cart from "./components/CartPage/Cart";
import Events from "./components/EventPage/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Menu from "./components/MenuPage/Menu";
import SignUp from "./components/SignupPage/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {" "}
                  <Hero></Hero>
                  <Home></Home>
                </>
              }
            ></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/products' element={<Home></Home>}></Route>
            <Route path='/menu' element={<Menu></Menu>}></Route>
            <Route path='/account' element={<Account></Account>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
