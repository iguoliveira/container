import './index.css'
import './script.js'

export default function Footer(){
    function appearProjects(e){
        e.preventDefault()
        if(document.getElementById('projects').style.display == 'none'){
            document.getElementById('projects').style.display = 'block'
        }
        else{
            document.getElementById('projects').style.display = 'none'
        }
    }

    return(
        <footer className='footer'>
            <div className='personal-projects'>
                <div className='personal-projects-header' onClick={ appearProjects }>PROJECTS</div>
                <div className='personal-projects-list' id='projects'>
                    <div><a href='https://github.com/iguoliveira/calculatorWeb' target={ '_blank' }>Web Calculator</a></div>
                    <div><a href='https://github.com/iguoliveira/javaCalculator' target={ '_blank' }>Java Calculator</a></div>
                </div>
            </div>
        </footer>
    )
}