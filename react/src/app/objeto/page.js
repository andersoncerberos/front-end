'use client'

import Pagina from "../components/Pagina"

export default function titulo() {


    const carros = [
        { marca: 'GM', modelo: 'corsa', cor: 'rosa', foto: '' },
        { marca: 'GM', modelo: 'celta', cor: 'rosa', foto: '' },
        { marca: 'GM', modelo: 'ferraria', cor: 'rosa', foto: '' },
        { marca: 'GM', modelo: 'cobalt', cor: 'rosa', foto: '' },
        { marca: 'GM', modelo: 'fusca', cor: 'rosa', foto: '' },
    ]
    return (
        <>
            <Pagina titulo="objetos">



                {carros.map(item => (
                    <p>{item.marca}</p>
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