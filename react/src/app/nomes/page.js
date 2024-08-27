'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Page() {

   const [nome, setnome] = useState('anderson')

   function alterarnome(){
        const novoNome = nome == 'anderson' ? 'anderson carlos pereira lima' : 'anderson' // if ternario
        setnome (novoNome)
   }

    return (
        <>
            <Pagina titulo = "nomes">
                <h1>{nome}</h1>
                <Button onClick={alterarnome}>alterar nome </Button>
            </Pagina>
        </>

    )
}
