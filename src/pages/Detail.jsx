import React from "react"

const BackPageFunc =()=>{
    window.location ="/"
}

const Detail =()=>{
    return(
        <>
        <p>Detay sayfası</p>
        <button onClick={BackPageFunc}>Yonlendırr</button>
        </>

    )
}


export default Detail