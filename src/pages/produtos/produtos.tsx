import Card from "@/components/Card";
const produtos = [
  // Seu array de produtos aqui
  {
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponível: true,
  },
  {
    produto: 'Teclado',
    valor: 69.9,
    desconto: 0,
    disponível: true,
  },
  {
    produto: 'Monitor',
    valor: 449.9,
    desconto: 0,
    disponível: false,
  },
  {
    produto: 'CPU',
    valor: 4992.9,
    desconto: 0,
    disponível: true,
  },
  {
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
  return(
    <div className="flex justify-center gap-3">
    {produtos.map((e: any) =>
      e.disponível ? (
        <Card
          key={e.produto}
          produto={e.produto}
          valor={e.valor}
          desconto={e.desconto}
          funcao={caldDesc}
        />
      ) : null
    )}
  </div>
  )
}