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
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus("");
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
        <h1>Login</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
             Login
            </Button>
          </Form.Item>
        </Form>
        <h3>{loginStatus}</h3>
        <Button onClick={Register}>Register</Button>
      </Col>
    </Row>
            </div>
    )
}
export default Login;