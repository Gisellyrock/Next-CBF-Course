import Link from "next/link"

export default function Topo(){
  return(
  <div className='flex flex-col justify-between items-center bg-zinc-300 h-[130px]'>
  <div>Logo</div>
  <div className="flex flex-col justify-center items-center">
  <div className="text-3xl">CFB Cursos</div>
   <div className="subtituloTopo">Curso de React</div> 
   </div>
  <nav className="flex gap-5">
    <Link href="/">
      Home
      </Link>
    <Link href={
      {
      pathname:"/produtos/produtos",
      query:{
        nome:'Giselly',curso:'React Next'
      }
      }
      }>
      Produtos
    </Link>
    <Link href="/teste/teste">
      Teste
    </Link>
    <Link href="/usestate/usestate">
      State
      </Link>
  </nav>
</div>
  )
}