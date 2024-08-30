'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
export default function Page() {

    const [personagens, setpersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setpersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo='disney'>
            {
                personagens.map(item => (
                    <p>{item.name}</p>
                ))
            }
        </Pagina>
    )
}

