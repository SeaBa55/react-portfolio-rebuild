import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Portfolio from "./pages/portfolio/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab, fas, far } from '@fortawesome/free-brands-svg-icons'
// import { faFilePdf, faGitHub, faLinkedin, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faGitHub, faLinkedin);
// library.add(fas, faFilePdf);
// library.add(far, faEnvelope);

function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className="page-content">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
