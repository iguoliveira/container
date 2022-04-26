import './index.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='about-me'>
                <div className='about-me-header'>IGOR OLIVEIRA RODRIGUES</div>
                <div className='about-me-text'>Sou um desenvolvedor web!</div>
            </div>

            <div className='personal-projects'>
                <div className='personal-projects-header'>SOME PROJECTS</div>
                <div className='personal-projects-list'>
                    <a href='https://github.com/iguoliveira/calculatorWeb' target={ '_blank' }><div>Web Calculator</div></a>
                    <a href='https://github.com/iguoliveira/javaCalculator' target={ '_blank' }><div>Java Calculator</div></a>
                </div>
            </div>

            <div className='midia-links'>
                <div>Github</div>
                <div>Linkedos</div>
                <div>Twitter</div>
            </div>
        </footer>
    )
}