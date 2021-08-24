import "./App.css";
import Login from "./LoginPage/Login";
import BasicInfo from "./BasicInfoPage/BasicInfo";
import ContactInfo from "./ContactInfoPage/ContactInfo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/basic" component={BasicInfo}/>
          <Route path="/contact" component={ContactInfo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
