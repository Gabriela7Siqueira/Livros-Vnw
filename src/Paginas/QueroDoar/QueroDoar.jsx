import s from './QueroDoar.module.scss'

export default function QueroDoar (){
    return (
        <section className={s.doacao}>
            <p>Porfavor, Preencha o Formulário com suas informações do Livro</p>
            <form action="">
            <div className="" alt= "Imagem livro Aberto">
            <h2> Informações do Livro </h2>
            </div> 
           <input type="text" name="" id="Título" placeholder='Título'/>
           <input type="text" name="" id="Categoria" placeholder='Categoria'/>
           <input type="text" name="" id="Autor" placeholder='Nome do Autor'/>
           <input type="text" name="" id="Link da Imagem" placeholder='Link da imagem'/>
           <button type='submit'>Doar</button>
           </form>
        </section>
    );
}