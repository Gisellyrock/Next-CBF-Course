import Card from "../../components/Card"

export default function Topo(){
  return(
  <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
  <div>Logo</div>
  <div className="flex flex-col justify-center items-center">
  <div className="text-3xl">CF Cursos</div>
   <div className="subtituloTopo">Curso de React</div> 
   </div>
  <div>Giselly</div>
  <Card/>
</div>
  )
}