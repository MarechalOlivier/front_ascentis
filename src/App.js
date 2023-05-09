import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation des fichiers bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des fichiers bootstrap
import Header from "./layout/header/Header.jsx";
import Footer from "./layout/footer/Footer.jsx";
//Importation des pages
import Home from "./pages/Home/Home.jsx";
import Creat_account from "./pages/Creat_account/Creat_account.jsx";
import Login from "./pages/Login/Login.jsx";
import Profil from "./pages/Profil/Profil.jsx";
import Quotation from "./pages/Quotation/Quotation.jsx";
import Support_ticket from "./pages/Support_ticket/Support_ticket.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Computer from "./pages/Computer/Computer.jsx";
import List_ticket from "./pages/List_ticket/List_ticket.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/creat_account" element={<Creat_account />} />
        <Route path="/admin/profil" element={<Profil />} />
        <Route path="/admin/quotation" element={<Quotation />} />
        <Route path="/admin/support_ticket" element={<Support_ticket />} />
        <Route path="/admin/list_ticket" element={<List_ticket />} />
        
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
