import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Page_test from "./Page _test";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Accueil />}>
          <Route index element={<Page_test />} />
          <Route path="header" element={<Header />} />
          <Route path="footer" element={<Footer />} />
      </Route> 
      </Routes>
    </BrowserRouter>
  );
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


