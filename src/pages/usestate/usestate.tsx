import {useState} from 'react'

export default function usestate(){
  const [cont, setCont]=useState<number>(10)

  function contador(){
    let c=cont
    c++
    setCont(c)
  }

  return(
    <div>
      usestate
      <div>{cont}</div>
      <button onClick={contador}>add</button>
    </div>
  )
}