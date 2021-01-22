import React, { Component } from "react";
//importation du reat router
//Nous importons Route, NavLink et HashRouter à partir du package react-router-dom
import {
 Route,
 NavLink,
 HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Contactt from "./Postuler";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        {/* Si on ajoute pas exat le couleur bleu d'element active reste toujour sur home*/ }
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/postuler">Postuler</NavLink></li>
                    </ul>
                    <div className="content">
                        {/* Si on n'ecrit pas le met clé exact contenue du Home sera tjrs affiché si on clique stuff ou contact car on a / */}
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/postuler" component={Contactt}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}   
   
export default Main;
