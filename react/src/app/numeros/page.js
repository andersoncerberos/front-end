'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Page() {

    const [numero,setnumero] = useState(0)

    function somar(){
        setnumero (numero +1)
          
    }
    function subtrair(){
        setnumero (numero -1)
          
    }
   
    return (
        <>
            <Pagina titulo="numeros">
                <Button onClick={somar}>somar </Button>
                <h1>{numero}</h1>
                <Button onClick={subtrair}>subtrair </Button>
            </Pagina>
        </>

    )
}