import React from "react"
import "../styles/services.css"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Cards from "../Components/Cards"

export default function Services () {
    return (
        <div>
            <div className="img-nav-container">
                <img className="img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWNjb3VudGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <div className="button-box">
                    <h3 className="button-box-header">Want to Learn More About Who We Are?</h3>
                    <button className="button-box-button"><Link to="/about">About Us</Link></button>
                </div>
            </div>

            <h2>Services Offered by McCauley & Associates, P.C.</h2>
            <Cards />

            <hr></hr>

            <div>
                <h2>Watch These Videos to Learn More About Our Caging Process:</h2>
            </div>
        </div>
    )
}