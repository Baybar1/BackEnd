import './App.css';
import { Product } from './components/Product';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Main } from './views/Main';
import { Detail } from './components/Detail';
import { Update } from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Main />}/>
        <Route path = '/product/:id' element = {<Detail />} />
        <Route path ='/product/:id/edit' element = {<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
