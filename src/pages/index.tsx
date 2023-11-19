// Importe as dependências necessárias aqui, se necessário

import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = 'Giselly';
let canal = 'CBFCursos';

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Cursos de react Next</div>
        <div>Typescript</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
     
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px',
};
