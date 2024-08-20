import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabacalho";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <Cabecalho titulo ="pagina inicial" sub ="anderson carlos" />
      <Button variant="danger"> clicke aqui</Button>{' '}

      <br></br><Link href="/fundamentos">pagina fundamentos</Link><br/>
      <br></br><Link href="/cliente">pagina cliente</Link><br/>
    </main>
  );
}
