import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Header from "./components/Header";
import TopLists from "./components/TopLists";
import DiseasesCard from "./components/DiseasesCard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <TopLists />
          <div className="container">
            <Home />
            <DiseasesCard />
            {/* <AppointmentForm/> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
