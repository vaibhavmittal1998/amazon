import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ServiceNavbar from "./Components/ServiceNavbar/ServiceNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ServiceNavbar />
        <Switch>
          <Route path="/checkout">
            <h1>Hello World</h1>
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
