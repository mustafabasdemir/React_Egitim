//components icinde tanımlı ogreyı ımport ettik

import { useEffect, useRef, useState } from "react";
// import Baslik from "./components/baslik"
// import Deneme from "./components/deneme"

 
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

  const [status,setStatus]=useState("deneme")
  const firstRef = useRef(0);  /* input kutusunu ele alabiliriz asaghıda kullanım var */

  useEffect(()=>{   /* sayfa acıldıgında değisecek veriler için */
    setStatus("yazi baslangıcta degistirildi")

  },[])

  const reffunc= ()=>
  {
    console.log("arama kutusu degeri  :",firstRef.current.value = 5)
  }
  return(
    <div>
      {status}
      <input type="text" ref={firstRef} placeholder="ara"></input>
      <button onClick={reffunc}>tıkla</button>
    </div>
  )

}

export default App;
