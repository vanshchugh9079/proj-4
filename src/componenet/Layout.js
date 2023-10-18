import React from 'react'
import Header from './Header'
import { Row } from 'react-bootstrap'
import Aside from './ui/Aside'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
export default function Layout() {
  return (
 <Container>
    <Header/>
    <Row className='v_row temp-border row m-0'>
        <Aside/>
        <Outlet/>
    </Row>
    <Footer/>
 </Container>
  )
}
