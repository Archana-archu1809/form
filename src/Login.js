
import  Axios  from "axios";
import {Input, Form, Button, Row, Col,notification } from "antd";
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
            
          
          }
        
        });
     
      };
      const Register=()=>{
       
          navigate("/signup")

       
        
 }
      localStorage.setItem("key", loginStatus);
     
      if(loginStatus ===1){
        navigate("/admin");
      
       
        
      }
      if (loginStatus > 1){
        navigate("/datas")
      }
  

    return(
        
             <Row
      className="row"
     
     
    >
      <Col sm={24} md={12}>
        <h1 className="header">Welcome Back</h1>
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
            <Input placeholder="Email" />
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
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button">
             Login
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={Register} type="primary" danger className="button">Register</Button>
        
         
      </Col>
    </Row>
           
    )
}
export default Login;