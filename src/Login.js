import { ToastContainer, toast } from "react-toastify";
import  Axios  from "axios";
import {Input, Form, Button, Row, Col} from "antd";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login(){
    const [loginStatus,setLoginStatus]=useState("");
    const navigate=useNavigate();
   
    const onFinish = (values) => {
     
        Axios.post("http://localhost:8000/login", {
         
          email: values.email,
    
          password: values.password,
        
        }).then((response) => {
          if (response.data.id) {
            setLoginStatus(response.data.id);
            toast("hi")
          
          }
        
        });
     
      };
      const Register=()=>{
       
          navigate("/signup")


        
    
      
      
        

        
      
      }
      localStorage.setItem("key", loginStatus)
     
      if(loginStatus ===1){
        navigate("/data")
        
      }
      if (loginStatus > 1){
        navigate("/datas")
      }
  

    return(
        
             <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
     
     
    >
      <Col>
        <h1 style={{color:"#33333",fontFamily:"'Josefin Sans', sans-serif",fontSize:"42px",fontWeight:"bold",lineHeight:1,}}>Welcome Back</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
            name="email"
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="password"
          >
            <Input.Password placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
             Login
            </Button>
          </Form.Item>
        </Form>
        <h3>{loginStatus}</h3>
        <Button onClick={Register} style={{width:"100%"}}>Register</Button>
        
          <ToastContainer/>
      </Col>
    </Row>
           
    )
}
export default Login;