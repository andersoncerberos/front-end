'use client'

import Link from "next/link";
import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: ''}, 
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: ''}, 
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', foto: ''}, 
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: ''}, 
        {marca: 'GM', modelo: 'Cobalt', cor: 'Branco', foto: ''}, 
    ]

    return (
        
        <Pagina titulo="Objetos">
            <br></br><Link href="/">pagina inicial</Link><br/>

            {carros.map(item => (
                <p>{item.marca}</p>
            ))}

        </Pagina>
    )
}