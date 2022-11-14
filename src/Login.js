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
          console.log(response)
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].email);
          }
        });
      };
      const Register=()=>{
        navigate("/signup")
      }

    return(
        <div>
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
      </Col>
    </Row>
            </div>
    )
}
export default Login;