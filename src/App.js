import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/shop"} component={Shop}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
