'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/app/services/apiDisney";
import { Carousel } from "react-bootstrap";

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Carrossel">
            <Carousel>
                {personagens.map(item => (
                    <Carousel.Item key={item._id}>{ }
                        <img src={item.imageUrl} width="100%" height={700} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </Pagina>
    )

}