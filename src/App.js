//components icinde tanımlı ogreyı ımport ettik
// import { IoSearchSharp } from "react-icons/io5";
// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import Baslik from "./components/baslik"
// import Deneme from "./components/deneme"

import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// import { useState } from "react";

 
function App() {


  // /* count mantıgı burada count değişkenini setcount mantıgı ile guncelleme imkanı sunuyor */
  // const [count,setCount]= useState(0)


  // const propsmantik ="props jsx components icine veri gondermeyi sağlar";

  // const tiklaFonksiyon=() =>{
  //   setCount(count +1)  /*  butına her tıklandıgında count degeri 1 arttı */
  // }


  // const arr=[
  //   {name:"arry1",id:0},
  //   {name:"arry2",id:1},
  //   {name:"arry3",id:3},
  // ]


  // return (
  //   <div className="App">
  //     <Baslik veri={propsmantik}/>  { /*veriyi baslik componentine gonderdik*/}
  //     {/* componnets icindeki basligi cagirdik */}
  //     <Deneme/> {/* ikinci components */}
  //     {count} 
  //     <br></br>
  //     <button onClick={tiklaFonksiyon}>tikla</button>  {/* butona tıklama olayı functıon cagirildi */}


  //   {/* map kavramı */}
  //   <p>array dizisi yazdırıldı</p>
  //   {
      
  //     arr.map((ar)=>(
  //       <div key={ar.id}>{ar.name}</div>
  //     ))
  //   }


  //   </div>
  // );



  /*  setcoutn kullanımı ıkıncı ornek   */



  // const[status,setStatus]= useState(false)

  // if(status)
  // {
  //   return(
  //     <div>status durumu true</div>
  //   )
  // }else
  // {
  //   return(
  //     <div>
  //       status durumu false
  //       <button onClick={()=> setStatus(!status)}>Statu durumunu true yap</button>
  //     </div>
  //   )
  // }




  /* useefect kulanımı */

  // const [status,setStatus]=useState("deneme")
  // const firstRef = useRef(0);  /* input kutusunu ele alabiliriz asaghıda kullanım var */

  // useEffect(()=>{   /* sayfa acıldıgında değisecek veriler için */
  //   setStatus("yazi baslangıcta degistirildi")

  // },[])

  // const reffunc= ()=>
  // {
  //   console.log("arama kutusu degeri  :",firstRef.current.value = 5)
  // }
  // return(
  //   <div>
  //     {status}
  //     <input type="text" ref={firstRef} placeholder="ara"></input>
  //     <button onClick={reffunc}>tıkla</button>
  //   </div>
  // )
  




  // buton click ile array iiçine ekleme uygulaması todo app mantıgı 

    // const [text,setText]=useState("")
    // const [message,setMessage]=useState([])

    // const onChangeFunc =(e)=>{
    //   setText(e.target.value)
    // }

    // const MessageFunc =()=>{
    //   setMessage(prev=> [...prev,text])
    //   setText('')
    // }


  //axios ile country apiye baglanıp veri çekmek  
  // const [country,setCountry] = useState([])

  // useEffect(()=>{  //sayfa acıldıgında bu fonskyionu olustur
  //   const getContry = async()=>{
  //     const data = await axios.get('https://restcountries.com/v3.1/all')
  //     setCountry(data)  //yukarıda country adındaki degiskeni setcountry ile degistir
  //   //await ile gelen datanın hepsinin gelmesini bekledik
  //   }
  //   getContry()  //fonksiyonu cagır
  // },[])

  // console.log("country",country)


  //redus kullanımı  

  const dispatch = useDispatch()
  const {init} = useSelector(state=> state.change)
  console.log("object",init)


  const getData =()=>{
    dispatch({type:'CHANGE',payload:["deneme"]})
  }

  return(
    <>
    {/* ıcon kutuphanesınden ıconu yukarı ımport edıp kullandık  */}

    
    {/* <IoSearchSharp />  */}

    {/* router dom kutuphanesı ile sayfa gecis işlemleri */}

    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Detail/:id" element={<Detail />} />
    </Routes>
    </BrowserRouter> */}



      {/* todo app mantıgı  */}

      {/* <input value={text} onChange={onChangeFunc} type="text" placeholder="ekle"/>
      <button onClick={MessageFunc}>Listeye Ekle</button>
      {

        message?.map((msg,i)=>(
          <div key={i}>{msg}</div>
        ))

      } */}


    {/* varsa country degerilerini ekrana yazalım */}

    {/* {
      country?.data?.map((ar,i)=>(
        <div key={i}>{ar.name.common}</div>
      ))
    } */}


  {/* redux kullanımı  */}

  {init}
  <button onClick={getData}>Verileri Al</button>


    </>
  )
}

export default App;
