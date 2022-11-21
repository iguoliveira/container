import { Link } from 'react-router-dom'
import './navbar.scss'

export const Navbar = () => {
    return (
        <nav className='navbar-content'>
            <Link to='/' className='logo'>SENAI</Link>
            <div className='links'>
                <Link to='/'>home</Link>
                <Link to='/areas'>areas</Link>
            </div>
        </nav>
    )
}