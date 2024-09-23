import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav>
            <div className='navList'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header