import s from './QueroDoar.module.scss'

export default function QueroDoar (){
    return (
        <section>
            <p>Porfavor, Preencha o Formulário com suas informações do Livro</p>
            <form action="">
            <div className="" alt= "Imagem livro Aberto">
            <h2> Informações do Livro </h2>
            </div> 
           <input type="text" name="" id="Título" />
           <input type="text" name="" id="Categoria" />
           <input type="text" name="" id="Autor" />
           <input type="text" name="" id="Link da Imagem" />
           <input type="Submit" value="Doar" className="{ }" />
           </form>
        </section>
    );
}