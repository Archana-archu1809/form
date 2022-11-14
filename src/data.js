import { useState,useEffect } from "react";
import  Axios  from "axios"
import { Card } from "antd";
function Data(){
    const [data,setData]=useState({});
    useEffect(()=>{
        Axios.get("http://localhost:8000/datas",).then((response)=>{
            console.log(response.data)
            setData(response.data.message);
        })
    },[])

    return(
        <>
        {/* {/* {data.map((data)=><Card key={data.id}>{data.name}</Card>)} */}
         {data.name} 
         {data.email}
         {data.technology}
         {data.experience}
        </>
    )
}
export default Data;