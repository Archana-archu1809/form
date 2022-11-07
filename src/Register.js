import {Form,Input, Button,Row,Col, InputNumber, Radio} from 'antd'
import Axios from "axios";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
function Register(){

const [registerStatus,setRegisterStatus]=useState("");
const navigate=useNavigate();
  const onFinish=(values)=>{
    Axios.post("http://localhost:8000/register",{
      name:values.name,
      email:values.email,
      password:values.password,
      gender:values.gender,
      experience:values.experience,
      technology:values.technology,
      rating:values.rating
    }).then((response)=>{
      console.log(response);
      if(response.data.message){
     setRegisterStatus(response.data.message)
      }
      
    })
    console.log(values);


  }
  if(registerStatus === "thanks for registering"){
    navigate("/");
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
        <h1>Register</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
            label="Name"
            name="name"
          >
            <Input />
          </Form.Item>
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
          <Form.Item 
          rules={[
            {
              required: true,
              message: "Please input your gender",
            },
          ]}
        label="Gender" name="gender">
          <Radio.Group >
            <Radio value="Female"> Female </Radio>
            <Radio value="Male"> Male </Radio>
          </Radio.Group>
        </Form.Item>
        
          <Form.Item
          rules={[
            {required:true,message:"Please input your experience"}
          ]}
          label="Experience"
          name="experience"
          >
            <Input />

          </Form.Item>
          <Form.Item rules={[
            {
              required:true,
              message:"Please input your technology"
            }
          ]} 
          label="Technology"
          name="technology"
          >
            <Input />

          </Form.Item>
          <Form.Item label="Rating" name="rating">
          <Radio.Group>
            <Radio value="Basic Awareness"> Basic Awareness </Radio>
            <Radio value="Moderate Experience"> Moderate Experience </Radio>
            <Radio value="Expert">Expert </Radio>
          </Radio.Group>
        </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        {registerStatus}
      </Col>
    </Row>

        </div>
    )
}
export default Register
