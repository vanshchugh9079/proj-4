import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/login">Login</Link>
        <Link className='nav-link' to="/register">register</Link>
        <Link className='nav-link' to="/about">
          About
        </Link>
    </Nav>
  )
}
