// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Topo from "@/components/Topo"
import Card from "@/src/components/Card"

const nome='Giselly'
let canal='CBFCursos'

function caldDesc(v:number, d:number){
  return v-d 
}

function caldDesc2(v:number, d:number){
  return v-d/2 
}


export default function Home() {
  return (
    <div>
      <Topo/>
      <div style={testecss}>
      <div>Cursos de react Next</div>
      <div>Typescript</div>
      <div style={{color:'#f00', backgroundColor:'#bbb'}}>React
      </div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto={'Mouse'} valor={49.90} desconto={10} funcao={caldDesc}/>
        <Card produto={'Teclado'} valor={49.90} desconto={2} funcao={caldDesc}/>
        <Card produto={'Monitor'} valor={49.90} desconto={0} funcao={caldDesc2}/>
        <Card produto={'CPU'} valor={49.90} desconto={15} funcao={caldDesc2}/>

      </div>
    </div>
  )
}

const testecss={
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'$00f',
  backgroundColor:'#eee',
  fontSize:'20px'
}
