import {useState} from 'react'
import DisplayState from "@/components/DisplayState"

export default function usestate(){
  const [cont, setCont]=useState<number>(10)

  function adicionar(){
    let c=cont
    c++
    setCont(c)
  }

  function subtrair(){
    let c=cont
    c--
    setCont(c)
  }
  return(
    <div>
      usestate
      <DisplayState valor={cont}></DisplayState>
      <div className='flex gap-5'>
      <button className="btnPadrao" onClick={adicionar}>add</button>
      <button className="btnPadrao" onClick={subtrair}>sub</button>
      </div>
    </div>
  )
}