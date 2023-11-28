import {BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import Home from './components/Home';

import './App.css';
import Header from './components/Header';

const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <div className='app-contianer'>
        <Header/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
