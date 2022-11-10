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
{data.map(data=><h1 key={data.id}>{data.email}</h1>)}
        </div>

    )
}
export default AdminSide