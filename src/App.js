import './App.css';
import Login from './component/Login';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './component/Signup';
import Home from './component/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/Home' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
