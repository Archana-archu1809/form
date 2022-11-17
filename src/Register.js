import {Form,Input, Button,Row,Col, InputNumber, Radio} from 'antd'
import Axios from "axios";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toast'
import "react-toastify/dist/ReactToastify.css";
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
     toast(response.data.message)
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
      <h1 style={{color:"#33333",fontFamily:"'Josefin Sans', sans-serif",fontSize:"42px",fontWeight:"bold",lineHeight:1,textAlign:"center"}}>Register Form</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
           
            name="name"
          >
            <Input placeholder='Name' />
          </Form.Item>
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
            <Input placeholder='Email' />
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
            <Input.Password placeholder='Password'/>
          </Form.Item>

        
          <Form.Item
          rules={[
            {required:true,message:"Please input your experience"}
          ]}
         
          name="experience"
          >
            <Input placeholder='Experience' />

          </Form.Item>
          <Form.Item rules={[
            {
              required:true,
              message:"Please input your technology"
            }
          ]} 
         
          name="technology"
          >
            <Input placeholder='Technology'/>

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
          <Form.Item rules={[
            {
              required:true,
              message:"Please input your technology"
            }
          ]}  label="Rating" name="rating">
          <Radio.Group>
            <Radio value="Basic Awareness"> Basic Awareness </Radio>
            <Radio value="Moderate Experience"> Moderate Experience </Radio>
            <Radio value="Expert">Expert </Radio>
          </Radio.Group>
        </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
              Register
            </Button>
          </Form.Item>
        </Form>
        {registerStatus}
        <ToastContainer/>

      </Col>
    </Row>
  
        </div>
    )
}
export default Register
