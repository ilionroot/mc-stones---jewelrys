import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import Footer from "./components/Footer";

export default function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
