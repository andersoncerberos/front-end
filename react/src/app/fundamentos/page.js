import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function fundamentos() {


    return (
        <>
            <Cabecalho titulo="Fundamentos" />
            <Link href="/">pagina inicial</Link><br />
            <Container>
                <Alert>
                    Atenção muita atenção
                </Alert>

                <h1 className="text-danger">Fundamentos</h1>
                <p>sucesso</p>
                <Cabecalho titulo="Fundamentos" />
            </Container>
        </>

    )
}

