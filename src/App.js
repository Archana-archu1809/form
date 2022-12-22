import logo from './logo.svg';
import React from 'react';
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'
import './App.css';
import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Admin from './admin';
import AdminSide from './adminSide';
import Datas from "./data"
import { Layout, Row, Button } from 'antd';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Index from './components/register';
import View from './components/view'
const { Header, Footer, Sider, Content } = Layout;

function App() {
  
 
  return (
    <div className="App">
      <Layout><Sider><h1 className='h2'>Resume</h1></Sider>
        
        <Router>
        
      <Layout>
         
      
        <Routes>
          
          <Route path="/" element={<Login />} />
          
       
         
          <Route path="/signup" element={<Index/>} />
          <Route path="/admin" element={<AdminSide />} />
          <Route path="/datas" element={<View/>} />
          

         
         
        </Routes>
        </Layout>
      </Router></Layout>
     


    
    </div>
  );
}

export default App;
