import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route, BrowserRouter as Router } from 'react-router-dom';

//this page will be for all the routing for the site.
//you need to import the page from where its nested before you can route it



//import pages here
import Home from './pages/home';
import Coding from './pages/coding';
import Contact from './pages/contact';
import GraphicArt from './pages/graphicart'



ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Coding" component={Coding} />
            <Route exact path="/GraphicArt" component={GraphicArt} />
            <Route exact path="/Contact" component={Contact} />
        </div>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();