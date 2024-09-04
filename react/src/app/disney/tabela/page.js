'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/app/services/apiDisney";
import { Table } from "react-bootstrap";

export default function Page(){
    const [personagens, setPersonagens] = useState([])
    useEffect(()=>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
        })
    }, [])
    
    return (
        <Pagina titulo="Disney Table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map(item => (
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.imageUrl} height={100}/></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Pagina>
    )
}