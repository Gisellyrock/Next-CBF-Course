// Importe as dependências necessárias aqui, se necessário

import Topo from "@/components/Topo";
import Card from "@/src/components/Card";

const nome = 'Giselly';
let canal = 'CBFCursos';

const produtos = [
  // Seu array de produtos aqui
  {
    produto:'Mouse',
    valor:49.9,
    desconto:0,
    disponível:true
  },
  {
    produto:'Teclado',
    valor:69.9,
    desconto:0,
    disponível:true
  },
  {
    produto:'Monitor',
    valor:449.9,
    desconto:0,
    disponível:true
  },
  {
    produto:'CPU',
    valor:4992.9,
    desconto:0,
    disponível:true
  },
  {
    produto:'Caixa de som',
    valor:49.9,
    desconto:0,
    disponível:true
  }
];

function caldDesc(v: number, d: number) {
  return v - d;
}

function caldDesc2(v: number, d: number) {
  return v - d / 2;
}

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Cursos de react Next</div>
        <div>Typescript</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
      <div className="flex justify-center gap-3">
        {produtos.map((e: any) => (
          <Card
            key={e.produto} // Adicione uma chave única (neste caso, o nome do produto) para cada item do array
            produto={e.produto}
            valor={e.valor}
            desconto={e.desconto}
            funcao={caldDesc} // Corrigido para usar a função caldDesc
          />
        ))}
      </div>
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#00f', // Corrigido de '$00f' para '#00f'
  backgroundColor: '#eee',
  fontSize: '20px',
};
