import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HandleUpload/HomePage/HomePage";
import HandleUpload from "./pages/HandleUpload/HandleUpload";

function App() {

  return (

    <BrowserRouter>
    <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<Navigate to="/" />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<HandleUpload />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter> 

  );
}

export default App;
