import React, { useEffect, useState } from "react"
import arr from '../data'
import { useParams } from "react-router-dom"

const BackPageFunc =()=>{
    window.location ="/"
}


const Detail =()=>{


    const { id } = useParams();  //disaridan gelen id degeri 
    const [data, setData] = useState([]);

    useEffect(() => {    
      setData(arr);  //arr içini datalar ile doldurduk 
    }, [id]);


    return(
        <>
        <p>Detay sayfası</p>
        <button onClick={BackPageFunc}>Yonlendırr</button>

        {
            data.filter(dt=> dt.id==id).map((dat,i)=>(
                <div key={i}>{dat.name}</div>   //datalarin içinden gelen id ye gore filtreleyip ekrana yazdıık
            ))
        }


        </>

    )
}


export default Detail