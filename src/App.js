import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
