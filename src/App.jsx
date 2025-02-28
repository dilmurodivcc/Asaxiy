import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Period from "./components/Period";
import About from "./components/About";
import Wishlist from "./pages/Wishlist";
import Karzinka from "./pages/Karzinka";
import Orders from "./components/Orders";
import { Provider } from "./context/Provider";  

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/korzinka" element={<Karzinka />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <About />
        <Period></Period>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
