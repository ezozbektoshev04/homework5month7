import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Korzinka from "./pages/Korzinka";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<Korzinka />} />
        <Route path="/korzinka" element={<Shopping />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
