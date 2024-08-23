'use client'

import Pagina from "@/app/components/Pagina";

export default function Array() {

    const carros = ["corsa", "celta", "ferraria", "cobalt", "fusca"]
    const pessoas = ['anderson', 'vitor', 'kauan', 'moises']
    return (
        <>
            <Pagina titulo="pagina de array">



                {carros.map(item => (
                    <p>{item}</p>
                ))}

                <ul>
                    {carros.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Pagina>
                    
        </>
    )
}