import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Route path="/welcome" component={Welcome} />
      <Route path="/products" component={Products} />
    </>
  );
}

export default App;
