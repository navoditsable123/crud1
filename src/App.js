
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Show from './pages/Show';
import Update from './pages/Upadate';
import Delete from './pages/Delete';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/student/updatevalue/:studentID" element={<Update />}></Route>
        <Route path="/student/delete/:studentID" element={<Delete />}></Route>
      </Routes>
    </div>
  );
}

export default App;
