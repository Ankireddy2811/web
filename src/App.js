import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DoctorProfile from "./components/DoctorProfile";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors/:id" component={DoctorProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
