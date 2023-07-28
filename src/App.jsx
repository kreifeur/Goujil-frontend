import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Purchases from "./components/Purchases";
import Customers from "./components/Customers";
import Suppliers from "./components/Suppliers";
import Stocks from "./components/Stocks";
import Buy from "./components/Buy";
import Mabiaat from "./components/Mabiaat";
import LesVents from "./components/LesVents";
import Sellers from "./components/Sellers";
import Camions from "./components/Camions";
import Sell from "./components/Sell";

const App = () => {
  return (
    <div className="w-[100%] h-screen text-sm flex">
      <BrowserRouter>
        <Sidebar />
        <div className="w-[100%] h-[100%]">
          <Header />

          {/* les routes */}
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/stocks" element={<Buy />}></Route>
            <Route path="/suppliers" element={<Suppliers />}></Route>
            <Route path="/historique" element={<Mabiaat/>}></Route>y
            <Route path="/vents" element={<LesVents/>}></Route>
            <Route path="/sellers" element={<Camions/>}></Route>
            <Route path="/sell" element={<Sell/>}></Route>
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
