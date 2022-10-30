import './App.css';
import { Product } from './components/Product';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Main } from './views/Main';
import { Detail } from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Main />}/>
        <Route path = '/product/:id' element = {<Detail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
