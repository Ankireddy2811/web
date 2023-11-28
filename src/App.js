import {BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import Home from './components/Home';

import './App.css';

const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <div className='app-contianer'>
        <Home/>
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
