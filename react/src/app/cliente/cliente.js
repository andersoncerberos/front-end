import Link from "next/link";
import Cabecalho from "../components/Cabacalho";

export default function Cliente(){

    return(
        <Cabecalho>
            <Link href ="/">pagina inicial</Link>
            <Link href ="/fundamentos">pagina fundamentos</Link>
        </Cabecalho>
    )

}