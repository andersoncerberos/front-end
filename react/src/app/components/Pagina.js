import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">pagina inicial</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/fundamentos">fundamentos</Nav.Link>
                        <Nav.Link href="/clientes">clientes</Nav.Link>
                        <Nav.Link href="/array">array</Nav.Link>
                        <Nav.Link href="/objetos">objetos</Nav.Link>
                        <Nav.Link href="/carros ">carros</Nav.Link>
                        <Nav.Link href="/nomes">nomes</Nav.Link>
                        <Nav.Link href="/numeros">numeros</Nav.Link>
                        <Nav.Link href="/disney">disney</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>

            </div>
            <Container>
                {props.children}
            </Container>
        </>
    )
}