'use client'

import Link from "next/link";
import Pagina from "@/app/components/Pagina";

export default function Page() {

    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: ''}, 
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: ''}, 
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', foto: ''}, 
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: ''}, 
        {marca: 'GM', modelo: 'Cobalt', cor: 'Branco', foto: ''}, 
    ]

    return (
        
        <Pagina titulo="Objetos">
            <br></br><Link href="/objetos">pagina objetos</Link><br/>

            {carros.map(item => (
                <p>{item.marca}</p>
            ))}

        </Pagina>
    )
}