import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import TopLists from './components/TopLists';

const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <div>
    <Header/>
    <TopLists/>
      <Home/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
