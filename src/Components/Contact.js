import React from "react"
import "../styles/contact.css"
import {Link} from "react-router-dom"

export default function Contact () {
    return (
        <div>
            <div>
                <img className="img" src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            </div>

                    <h2>Contact McCauley & Associates, P.C.</h2>
            <div className="contact-page">
                <div className="address-info-container">
                    <div className="info">
                        <h3>McCauley & Associates P.C. – Utah</h3>
                        <p>370 East South Temple, Ste. 580</p>
                        <p>Salt Lake City,UT 84111</p>
                        <p>Office: 385-202-7284</p>
                        <p>Cell: 801-664-2155</p>
                    </div>
                    <div className="info">
                        <h3>McCauley & Associates P.C. – Washington, DC</h3>
                        <p>122 C Street NW #540</p>
                        <p>Washington, DC 20001</p>
                    </div>
                    <div className="info">
                        <h3>Call us at (385) 202-7284</h3>
                        <p>Get in touch and we’ll get back to you as soon as we can.</p>
                        <p>We look forward to hearing from you!</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h3>Contact Form</h3>
                    <p className="contact-asterisk">Fields marked with an * are required</p>
                    <input placeholder="Name*"></input>
                    <input placeholder="Email*"></input>
                    <input placeholder="Phone"></input>
                    <input placeholder="Your Message*"></input>
                    <button className="contact-message-button">Send</button>
                </div>
            </div>
        </div>
    )
}