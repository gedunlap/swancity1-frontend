import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="nav">
            <Link to='/'>
                <img src="https://i.imgur.com/vaF3qy4.png" alt="Swan City Modern" />
            </Link>
            <Link to='/' className="navitem" style={{textDecoration:'none'}}>
                <div>Home</div>
            </Link>
            <Link to='/about' className="navitem" style={{textDecoration:'none'}}>
                <div>About</div>
            </Link>
            <Link to='/product' className="navitem" style={{textDecoration:'none'}}>
                <div>Products</div>
            </Link>
        </nav>
    )
}
