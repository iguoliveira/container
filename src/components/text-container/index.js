import './index.css'

export default function Text(){
    return(
        <section>
            <div className='items'>
                <div className='icon-container'>
                    <img src="img/icon/icon1.jpg" className='icon-image' alt='icon'/>
                    <p>IGOR OLIVEIRA RODRIGUES</p>
                </div>

                <div className='text-container'>
                    <p>Apaixonado por programacao, desejando aprender todos os conceitos e praticas do desenvolvimento web</p>
                    <p>Com o objetivo de me tornar um execelente desenvolvedor, conseguindo participar de grandes projetos em grandes times, onde eu consiga contribuir de forma ativa!</p>
                    <p>Atualmente aprendendo o framework React, com o objetivo de expandir cada vez mais os conhecimentos em web, conseguindo realizar projetos inteiros com as melhores tecnologias!</p>
                </div>
            </div>
        </section>
    )
}