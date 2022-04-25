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
                    <div><a href='https://github.com/iguoliveira/calculatorWeb' target={ '_blank' }>Web Calculator</a></div>
                    <div><a href='https://github.com/iguoliveira/javaCalculator' target={ '_blank' }>Java Calculator</a></div>
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