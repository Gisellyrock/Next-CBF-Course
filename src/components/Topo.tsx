import Link from "next/link"

export default function Topo(){
  return(
  <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
  <div>Logo</div>
  <div className="flex flex-col justify-center items-center">
  <div className="text-3xl">CFB Cursos</div>
   <div className="subtituloTopo">Curso de React</div> 
   </div>
  <nav>
    <Link href="/produtos/produtos">
      Produtos
    </Link>
    <Link href="/teste/teste">
      Teste
    </Link>
  </nav>
</div>
  )
}