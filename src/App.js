import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register/>} />
        </Routes>
      </Router>


    
    </div>
  );
}

export default App;
