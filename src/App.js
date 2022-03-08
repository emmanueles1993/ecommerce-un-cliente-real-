import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <Header />
      <Menu />
      <Footer />
      <Categories />
    </CartProvider>
  );
}

export default App;
