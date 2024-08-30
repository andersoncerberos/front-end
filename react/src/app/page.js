'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina titulo='pagina inicial'>
        <Cabecalho  sub="ANDERSON CARLOS " />
        <Button variant="danger"> clicke aqui</Button>{' '}

        
      </Pagina>
    </>
  );
}
