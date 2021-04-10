
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormData from './Components/form-data'
import { useState, useEffect } from "react";
import { Router, Route, Switch, useHistory} from 'react-router-dom';
//import { Redirect } from "react-router-dom";
import Home from './Components/home'

//import { withRouter } from 'react-router-dom';

/*const USERDATA = [
 {
   "id": 1,
   "name": "Kübra",
   "surname": "Özdem",
   "link":"/"
 }
]*/

const USERDATA = localStorage.getItem('userdata')
  ? JSON.parse(localStorage.getItem('userdata'))
  : []


function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [userdata, setUserdata] = useState(USERDATA)
  const history = useHistory();
  
  const handleName = event => {
    setName(event.target.value)
  }
  const handleSurname = event => {
    setSurname(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && surname !== '') {
      const data = { name, surname }
      setUserdata(data)
      setName('')
      setSurname('')
      history.push("/Home")
      
    } else {
      console.log('Hata')
    }
  }
 
  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(userdata))
  }, [userdata])

 
  return (
    <Router>

      <main>
        <Switch>
          
            <Route path="/Home" >
              <Home userdata={userdata} />
            </Route>
          
            <Route path="/" >
              <FormData name={name}
                surname={surname}
                handleName={handleName}
                handleSurname={handleSurname}
                handleSubmitForm={handleSubmitForm} 
                />
                
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