import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HandleUpload/HomePage/HomePage";
import HandleUpload from "./pages/HandleUpload/HandleUpload";

function App() {

  return (
    <>
      <Header />
      {/* <HomePage /> */}
   
     <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<HomePage/>} /> */}
          <Route path="/upload" element={<HandleUpload />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
