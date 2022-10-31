import {Form,Input, Button,Row,Col, InputNumber, Radio} from 'antd'
import Axios from "axios";
import { useState } from 'react';
function Register(){


  const onFinish=(values)=>{
    Axios.post("http://localhost:8000/Register",{
      name:values.name,
      email:values.email,
      password:values.password,
      gender:values.gender,
      experienc:values.experience,
      technology:values.technology,
      rating:values.rating
    }).then((response)=>{
      console.log(response);
      
    })
    console.log(values);


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
              message: "Please input your Color",
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
      </Col>
    </Row>

        </div>
    )
}
export default Register
