import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <Cabecalho titulo ="pagina inicial" sub ="anderson carlos" />
      <Button variant="danger"> clicke aqui</Button>{' '}

      <br></br><Link href="/fundamentos">pagina fundamentos</Link><br/>
      <br></br><Link href="/clientes">pagina Clientes</Link><br/>
      <br></br><Link href="/array">pagina array</Link><br/>
      <br></br><Link href="/objeto">pagina objetos</Link><br/>
      <br></br><Link href="/carros">pagina de carros</Link><br/>
    </main>
  );
}
