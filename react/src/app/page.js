'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina titulo='pagina inicial'>
        <Cabecalho  sub="anderson carlos" />
        <Button variant="danger"> clicke aqui</Button>{' '}

        <br></br><Link href="/fundamentos">pagina fundamentos</Link><br />
        <br></br><Link href="/clientes">pagina Clientes</Link><br />
        <br></br><Link href="/array">pagina array</Link><br />
        <br></br><Link href="/objeto">pagina objetos</Link><br />
        <br></br><Link href="/carros">pagina de carros</Link><br />
        <br></br><Link href="/nomes">pagina de nomes</Link><br />
      </Pagina>
    </>
  );
}
