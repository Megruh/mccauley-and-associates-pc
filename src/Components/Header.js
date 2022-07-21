import React from "react"
import {Link} from "react-router-dom"
import "../styles/header.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function Header () {
    return (
        <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <h1 className="green-company-name">McCauley <span className="grey-company-name">&</span><br/> Associates <span className="grey-company-name">P.C.</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="links-container">
                    <Nav>
                       <Nav.Link><Link className="header-links" to="/"><h3>Home</h3></Link></Nav.Link> 
                       <Nav.Link><Link className="header-links" to="/about"><h3>About</h3></Link></Nav.Link>
                       <Nav.Link><Link className="header-links" to="/services"><h3>Services</h3></Link></Nav.Link>
                       <Nav.Link><Link className="header-links" to="/contact"><h3>Contact</h3></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>


        // <nav className="header">
        //     <div className="company-name">
        //         <div className="company-name1">
        //             <h1 className="mccauley">McCauley</h1>
        //             <h1 className="ampersand">&</h1>
        //         </div>
        //         <div className="company-name2">
        //             <h1 className="associates">Associates,</h1>
        //             <h1 className="pc">PC</h1>
        //         </div>
        //     </div>
        //     <div className="nav-titles">
        //         <><Link className="header-links" to="/"><h3>Home</h3></Link>
        //         <Link className="header-links" to="/about"><h3>About</h3></Link>
        //         <Link className="header-links" to="/services"><h3>Services</h3></Link>
        //         <Link className="header-links" to="/contact"><h3>Contact</h3></Link></>
        //     </div>
        // </nav>
    )
}