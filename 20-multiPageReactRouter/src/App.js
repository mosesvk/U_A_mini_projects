import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <MainHeader/>
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" component={Products} />
        <Route path='/products/:productId' component={ProductDetail} />
      </main>
    </>
  );
}

export default App; 
