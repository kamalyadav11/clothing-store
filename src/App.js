import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";

const HatsPage = () => {
    return <h1>Hats Page</h1>;
};

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
