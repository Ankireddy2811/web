import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "./components/Home";
import DoctorProfile from "./components/DoctorProfile";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors/:id" component={DoctorProfile} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
