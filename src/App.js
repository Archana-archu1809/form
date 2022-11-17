import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Admin from './admin';
import AdminSide from './adminSide';
import Datas from "./data"
import { Layout, Row } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout><Router>
      
        <Routes>
        
        
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/data" element={<AdminSide />} />
          <Route path="/datas" element={<Datas/>} />
          

       
         
        </Routes>
      </Router></Layout>
     


    
    </div>
  );
}

export default App;
