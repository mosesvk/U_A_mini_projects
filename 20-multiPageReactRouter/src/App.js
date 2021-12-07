import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <MainHeader/>
      <main>  
        <Switch>
          <Route path='/'>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/products" component={Products} exact />
          <Route path='/products/:productId' component={ProductDetail} />
        </Switch>
      </main>
    </>
  );
}

export default App; 
