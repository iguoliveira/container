import './index.css'

export default function Text(){
    return(
        <section>
            <div className='items'>
                <div className='icon-container'>
                    <img src="img/icon/icon2.png" className='icon-image' alt='icon'/>
                    <div className='name-text'>IGOR OLIVEIRA RODRIGUES</div>
                </div>

                <div className='text-container'>
                    <div className='big-text'>FULL STACK</div>
                    <div className='sub-text'>WEB DEVELOPER</div>
                </div>
            </div>
        </section>
    )
}