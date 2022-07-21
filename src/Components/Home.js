import React from "react"
import {Link} from "react-router-dom"
import "../styles/home.css"

export default function Home () {
    return (
        <div>
            <div className="img-nav-container">
                <img className="img" src="https://images.unsplash.com/photo-1469248620856-e8c981d98aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNhbHQlMjBsYWtlJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <div className="button-box">
                    <h3 className="button-box-header">Want to Learn More About What We Do?</h3>
                    <button className="button-box-button"><Link to="/services">View Our Services</Link></button>
                </div>
            </div>

            <div className="home-about-text">
                <h2>Why Choose McCauley & Associates, P.C.</h2>
                <p>At McCauley & Associates, our primary effort has always been to provide outstanding services to our clients no matter how large or small. We are a full service CPA and consulting firm committed to excellence, proficiency, results, and value.</p>    

                <p>We are proud of the high quality and dedicated client focus of our services, and recognize that the main reason our clients have selected us — and continue to select us — is our reliability and responsiveness to their needs. The keys to our success over the past 14 years are simple but important: expertise, responsibility, accountability and consistent independent judgment exercised by our partners and staff. These keys to success have allowed McCauley & Associates to provide close personal attention to each of our client’s needs, which they have quickly come to expect and respect.</p>

                <p>Our quality assurance programs and our supporting services are provided on schedule, at a reasonable cost, and in response to the unique objectives, goals and circumstances of each individual client.</p>

                <hr></hr>
            </div>

            <div className="traits-container">
                <div className="trait">
                    <img className="trait-img" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    <h3>Expertise</h3>
                    <p className="trait-paragraph">Our years of experience navigating the political finance world means we’ll do things the right way, every time.</p>
                </div>
                <div className="trait">
                    <img className="trait-img" src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <h3>Reliability</h3>
                    <p className="trait-paragraph">We are responsive to your needs and consistently perform the tasks needed to take care of you.</p>
                </div>
                <div className="trait">
                    <img className="trait-img" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlY2tsaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <h3>Accountability</h3>
                    <p className="trait-paragraph">We are completely transparent with our clients and we accept responsibility for our work.</p>
                </div>
            </div>
        </div>
    )
}