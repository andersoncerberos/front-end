'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";

export default function Array() {

    const carros = ["corsa", "celta", "ferraria", "cobalt", "fusca"]
    const pessoas = ['anderson', 'vitor', 'kauan', 'moises']
    return (
        <>
            <Pagina titulo="pagina de array">
            <br></br><Link href="/">pagina inicial</Link><br/>
                {carros.map(item => (
                    <p>{item}</p>
                ))}

                <ul>
                    {pessoas.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Pagina>
                    
        </>
    )
}