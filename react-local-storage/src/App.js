
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormData from './Components/form-data'
//import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//import { Redirect } from "react-router-dom";
import Home from './Components/home'
import Card from './Components/card'

//import { withRouter } from 'react-router-dom';

/*const USERDATA = [
 {
   "id": 1,
   "name": "Kübra",
   "surname": "Özdem",
   "link":"/"
 }
]*/




function App() {
  return (
    <Router>
      <main>
        <Switch>
          
            <Route path="/Home" >
              <Home  />
            </Route>
            <Route path="/card">
              <Card />
            </Route>
            <Route path="/" >
              <FormData  />     
            </Route>
        </Switch>
      </main>
    </Router>
  );

}

export default App;
//export default withRouter(App);

/*<Route exact path="/Home" name={name}>
            {FormData } ?
                <Redirect to="/Form" /> :
                <Home />}
            </Route>
          <Redirect to="/Home" />
          <Redirect to={{
            pathname: "/Form",
            search: "utm=your+face"

          }} />
          <Redirect push to="/Home" />*/