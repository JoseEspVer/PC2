import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
          <ul>
            <li>
                <Link href='/'>Inicio</Link>
            </li>
            <li>
                <Link href='/login'>Login</Link>
            </li>
            <li>
                <Link href='/register'>Register</Link>
            </li>
            <li>
                <Link href='/productos'>Productos</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar;