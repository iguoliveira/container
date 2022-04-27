import './index.css'

export default function Header() {
    return(
        <div className='main-nav'>
            <a href="../App.js" className='main-option'>HOME</a>
            <div className='icons'>
                <div><a href='https://github.com/iguoliveira' target={'_blank'} rel="noreferrer"><img src='img/icon/github.png' /></a></div>
                <div><a href='https://www.linkedin.com/in/igor-rodrigues-022595207/' target={'_blank'} rel="noreferrer"><img src='img/icon/linkedin.png' /></a></div>
            </div>
        </div>
    )
}