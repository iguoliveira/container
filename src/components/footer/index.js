import './index.css'

export default function Footer(){
    function appearProjects(e){
        e.preventDefault()
        if(document.getElementById('projects').style.display == 'none'){
            document.getElementById('projects').style.display = 'block'
            document.getElementById('header').style.borderBottom = '1px solid whitesmoke'
        }
        else{
            document.getElementById('projects').style.display = 'none'
            document.getElementById('header').style.borderBottom = '0px'
        }
    }

    return(
        <footer className='footer'>
            <div className='personal-projects'>
                <div className='personal-projects-header' id='header' onClick={ appearProjects }>PROJECTS</div>
                <div className='personal-projects-list' id='projects'>
                    <div><a href='https://github.com/iguoliveira/calculatorWeb' target={ '_blank' }>Web Calculator</a></div>
                    <div><a href='https://github.com/iguoliveira/javaCalculator' target={ '_blank' }>Java Calculator</a></div>
                </div>
            </div>
        </footer>
    )
}