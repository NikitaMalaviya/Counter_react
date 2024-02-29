import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [data, setData] = useState(0)
    const [Data, setTimeoutData] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setTimeoutData(Data + 1)
        }, 1000)
    },);

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <div style={{fontSize:"50px"}}>{data}</div>
        <button style={{padding:"12px 22px", fontSize:"20px", backgroundColor:"cornflowerblue", borderRadius:"3px", cursor:"pointer"}} onClick={() => setData(data + 1)}>Click me!</button>
        <h2 style={{marginTop:"30px", fontSize:"40px"}}>TIMEOUT</h2>
        <h2 style={{fontSize:"45px"}}>{Data}</h2>
    </div>
  )
}

export default Counter
