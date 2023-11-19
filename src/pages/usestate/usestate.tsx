import {useState} from 'react'
import DisplayState from "@/components/DisplayState"

export default function usestate(){
  const [cont, setCont]=useState<number>(10)

  return(
    <div>
      usestate
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  )
}