import s from './inicio.module.scss';
import comunidade from "../../Componentes/Imagens/Comunidade.png" ;
import balanca from "../../Componentes/Imagens/Balança.png";
import lendoLivro from "../../Componentes/Imagens/lendoLivro.png";
import mao from "../../Componentes/Imagens/MaoTransforme.png";



export default function Inicio() {
    return (
      <main>
        <section className={s.secaoInicial}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={s.pgInicioDoar}>
          <h2>Por que devo Doar?</h2>
          <section className={s.cardsInicio}>
            <section>
              <img src={comunidade} alt="" />
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            <section>
              <img src={balanca} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>
            <section>
              <img src={lendoLivro} alt="" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>
            <section>
              <img src={mao} alt="" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
            </section>
          </section>
      </main>
    );
  }