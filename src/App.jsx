import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./pages/Register/Register";
import ProductList from "./pages/ProductList/ProductList";
import NotFound  from "./pages/404notfound/NotFound";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { ScrollToTop } from "./hooks/useScrollTop";
import Announcement from "./components/Announcement";
import ViewProduct from "./pages/SingleProduct/ViewProduct"
import { BodyStyles } from "./GlobalStyle/Global_style";

const logintitle = "welcome to zacro! please log in";
const registertitle = "create an account on zacro";

const App = () =>{
  return(
    <>
    <Router>
      <BodyStyles />
      <ScrollToTop />
      <Announcement/>
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
       <Route path="/shop/products/:category" component= {ProductList}/>
       <Route path="/shop/" component={ProductList} />
       <Route path={"/product/:category/:id"} component= {ViewProduct}/>
       <Route path= "*" component={NotFound} />
       
      </Switch>
    </Router>
    </>
  )
}

export default App;
