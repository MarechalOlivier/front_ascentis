import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des fichiers js bootstrap
import Home from "./pages/Home";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
