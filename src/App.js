import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Board from './board/Board'
import Header from './layout/Header'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />

      <Routes>
          <Route path='/board/list' element={<Board />}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
