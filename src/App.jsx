import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./pages/Register/Register";
import Product from "./pages/SingleProduct/ViewProduct";
import ProductList from "./pages/ProductList/ProductList";
import NotFound  from "./pages/404notfound/NotFound";
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom"
import { ScrollToTop } from "./hooks/useScrollTop";


const logintitle = "welcome to zacro! please log in";
const registertitle = "create an account on zacro";

const App = () =>{
  return(
    <>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route 
          path="/register" 
        >
        <Register
          title={registertitle}/>
        </Route>
        <Route path="/login">
          <Login 
            title= {logintitle}
          />
        </Route>
       <Route path="/cart" component= {Cart} />
       <Route path="/products/:category" component= {ProductList}/>
       <Route exact path="/product/:category/:id" component= {Product}/>
       <Route path= "*" component={NotFound} />
       
      </Switch>
    </Router>
    </>
  )
}

export default App;
