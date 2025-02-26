import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Period from "./components/Period";
import About from "./components/About";
import Wishlist from "./pages/Wishlist";
import { Provider } from "./context/Provider";

function App() {
  // window loading before render

  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <About />
        {/* <Modal />  */}
        <Period></Period>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
