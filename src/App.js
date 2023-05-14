import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation des fichiers bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des fichiers bootstrap
import Header from "./layout/header/Header.jsx";
import Footer from "./layout/footer/Footer.jsx";
//Importation des pages
import Home from "./pages/Home/Home.jsx";
import Create_account from "./pages/Create_account/Create_account.jsx";
import Login from "./pages/Login/Login.jsx";
import Account from "./pages/Account/Account.jsx";
import Quotation from "./pages/Quotation/Quotation.jsx";
import Support_ticket from "./pages/Support_ticket/Support_ticket.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Computer from "./pages/Computer/Computer.jsx";
import List_ticket from "./pages/List_ticket/List_ticket.jsx";
import Ticket_details from "./pages/Ticket_details/Ticket_details.jsx";
import Create_ticket from "./pages/Create_ticket/Create_ticket.jsx";
import Update_ticket from "./pages/Update_ticket/Update_ticket.jsx";

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
        <Route path="/admin/create_account" element={<Create_account />} />
        <Route path="/admin/account" element={<Account />} />
        {/* {/* <Route path="/admin/quotation" element={<Quotation />} />  */}
        {/* <Route path="/admin/support_ticket" element={<Support_ticket />} /> */}

        <Route path="/admin/list_ticket" element={<List_ticket />} />
        <Route path="/admin/create_ticket" element={<Create_ticket />} />
        <Route path="/admin/ticket/:id/update" element={<Update_ticket />} />
        <Route path="/admin/ticket/:id" element={<Ticket_details />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
