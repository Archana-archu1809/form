import { Card, Row,Col } from "antd";
import  Axios  from "axios"
import { useEffect, useState } from "react"

function AdminSide(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:8000/data",).then((response)=>{
            setData(response.data);
        })
    },[])

    return(
        <Row type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}>
            <Col>
{data.map((data)=><Card style={{width:300}} key={data.id}>{data.email}</Card>)}
</Col>
        </Row>

    )
}
export default AdminSide