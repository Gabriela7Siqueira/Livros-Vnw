import s from "./LivrosDoados.module.scss";
import protagonista from "./protagonista.png"

export default function LivrosDoados(){
    return(
        <section>
            <h2>Livros Doados</h2>
        <section className={s.livrosDoadosSection}>
            <section className={s.containerCards}/>
                <img src={protagonista} alt="Imagem do Livro O Protagonista" />
                <div>
                <h3>O protagonista</h3>
                <p>Susane Andrade</p>
                <p>Ficção</p>
                </div>
            </section>
        </section>
        )
    }