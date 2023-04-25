import { BrowserRouter, Routes, Route } from "react-router-dom";
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
