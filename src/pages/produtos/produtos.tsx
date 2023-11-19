import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";
const produtos = [
  // Seu array de produtos aqui
  {
    id:1,
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponível: true,
  },
  {
    id:2,
    produto: 'Teclado',
    valor: 69.9,
    desconto: 0,
    disponível: true,
  },
  {
    id:3,
    produto: 'Monitor',
    valor: 449.9,
    desconto: 0,
    disponível: false,
  },
  {
    id:4,
    produto: 'CPU',
    valor: 4992.9,
    desconto: 0,
    disponível: true,
  },
  {
    id:5,
    produto: 'Caixa de som',
    valor: 49.9,
    desconto: 0,
    disponível: false,
  },
];

function caldDesc(v: number, d: number) {
  return v - d;
}

function caldDesc2(v: number, d: number) {
  return v - d / 2;
}

export default function produtosPagina(){
  const router= useRouter()
  // const nome=router.query.nome
  // const curso=router.query.curso
  const {nome, curso}=router.query
  console.log(nome)
  console.log(curso)

  return(
    <div>
    <Topo/>
    <div className="flex justify-center gap-3">
    {produtos.map((e: any) =>
      e.disponível ? (
        <Card
          key={e.id}
          produto={e.produto}
          valor={e.valor}
          desconto={e.desconto}
          funcao={caldDesc}
        />
      ) : null
    )}
    </div>
  </div>
  )
}