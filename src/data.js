import { useState,useEffect } from "react";
import  Axios  from "axios"
import { Card, Col, Row } from "antd";
function Data(){
    const [data,setData]=useState({});
  
    useEffect(()=>{
        const id=localStorage.getItem('key')
        Axios.get(`http://localhost:8000/datas/${id}`,).then((response)=>{
            console.log(response.data.student)
            setData(response.data.student);
        })
        
    },[]);

    return(
        <Row type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}>
            <Col>
        <Card style={{ width:300}}> <p>Name:{data.name} </p>
        <p>Email:{data.email}</p> 
        <p>Technology: {data.technology}</p>
     <p>Experience:{data.experience}</p>    </Card>
     </Col>
        
        </Row>
    )
}
export default Data;