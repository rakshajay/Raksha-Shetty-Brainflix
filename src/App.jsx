import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {

  return (

    <BrowserRouter>
    <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<Navigate to="/" />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter> 

  );
}

export default App;
