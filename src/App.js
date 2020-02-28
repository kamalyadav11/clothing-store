import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
                <Route path="/sign-in" component={SignInAndSignUp} />
            </Switch>
        </div>
    );
}

export default App;
