import './App.css';
import { Main } from './views/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AddAuthor } from './components/AddAuthor';
import { UpdateAuthors } from './components/UpdateAuthors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Favorite Authors</h1>
      <Routes>
      <Route path = '/' element = {<Main />} />
      <Route path = '/author' element = {<AddAuthor />} />
      <Route path = '/author/edit/:id' element = {<UpdateAuthors />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
