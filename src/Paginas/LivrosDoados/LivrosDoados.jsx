import s from "./LivrosDoados.module.scss";
import protagonista from "./protagonista.png"
import axios from "axios"
import { useEffect , useState} from "react";

export default function LivrosDoados(){
    const [livros,setLivros]=useState([])
    const pegarLivros = async()=> {
        const dados = await axios.get ("https://api-livros-doados.onrender.com/livros")
    setLivros (dados.data)
    }
    useEffect (()=> {
        pegarLivros ()
    },[])

    return(
        <section>
            <h2>Livros Doados</h2>
        <section className={s.livrosDoadosSection}>
            {livros.map ((item)=>(
            <section className={s.containerCards}> 
            <img src={item.imagem_url} alt="" />
            <div>
                <h3>{item.titulo}</h3>
                <p>{item.autor}</p>
                <p>{item.categoria}</p>
            </div>
            </section>
            ))}
        </section>
            </section>
        )
    }