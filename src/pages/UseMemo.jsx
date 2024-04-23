import React, { useMemo, useState } from 'react'


const UseMemo = () => {
    const [count, setcount] = useState(0);
    const [item, setitem] = useState(0);
   
    let multicount=useMemo(()=>{
        console.log('multicount')
        return count*5;
    },[count])
  return (
    <div>
      <h1>Use memo hook in react</h1>
      <h2>count:{count}</h2>
      <h2>item:{item}</h2>
      <h2>multicount:{multicount}</h2>
      <button onClick={()=>setcount(count+1)}>update count</button>
      <button onClick={()=>setitem(item+10)}>update item</button>
    </div>
  )
}

export default UseMemo
