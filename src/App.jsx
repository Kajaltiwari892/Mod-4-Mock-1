import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./MyComponents/Navbar";
const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ChakraProvider>
    </>
  );
};

export default App;
