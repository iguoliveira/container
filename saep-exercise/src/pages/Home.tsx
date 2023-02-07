import './home.scss'
import { Link } from 'react-router-dom'

export const Home = () => {
    document.title = 'Home'
    return (
        <section className='home-content'>
            <Link to='areas'>SEE AREAS!</Link>
        </section>
    )
}