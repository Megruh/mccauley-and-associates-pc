import React from "react"
import Card from 'react-bootstrap/Card'
import "../styles/cards.css"

export default function Cards () {
    return (
        <div className="services-container">
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>PAC Auditing & Outsourcing</Card.Title>
                    <Card.Text>
                    More and more corporations and organizations are opting to outsource their political action committees (PACs) to accounting firms. We at McCauley & Associates P.C. would love to help you manage your PAC.
                    </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>FEC Compliance</Card.Title>
                    <Card.Text>
                    The Federal Election Commission (FEC) requires registered PACS, candidates, and other political organizations to file FEC reports on a set schedule. To ensure correct filing and full compliance, you can hire us to handle these reports for you.
                    </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Political Campaign Accounting</Card.Title>
                    <Card.Text>
                    We manage all aspects of campaign financial transactions, including vetting contributions, issuing checks, ensuring compliance, processing payroll, assisting with cash management and budgeting, and more.
                    </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Political Compliance Reporting – Form 8872</Card.Title>
                    <Card.Text>
                    If your political organization has contributions and expenditures to report, we can help. We’ll make sure everything is done on time and in compliance so you can focus on what matters most.
                    </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Political Entities</Card.Title>
                    <Card.Text>
                    If you need help forming your political campaign entity, PAC, or political organization, we would love to help. We’ll ensure you’re fully set up and compliant with federal, state, and local laws.
                    </Card.Text>
                    </Card.Body>
            </Card>
        </div>
       
    )
}