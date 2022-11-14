import { Card } from "antd";
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
        <div>
{data.map((data)=><Card key={data.id}>{data.email}</Card>)}
        </div>

    )
}
export default AdminSide