import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
   } from "react-router-dom"


const App = () =>{
  return(
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route 
          path="/register" 
        >
        <Register
          title="create an account on zacro"/>
        </Route>
        <Route path="/login">
          <Login 
            title="welcome to zacro! please log in"
          />
        </Route>
       <Route path="/cart" component= {Cart} />
       <Route path="/productlist" component= {ProductList}/>
       <Route path="/product" component= {Product}/>
       
      </Switch>
    </Router>
    </>
  )
}

export default App;
