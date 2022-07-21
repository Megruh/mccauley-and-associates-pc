import React from "react"
import "../styles/about.css"
import {Link} from "react-router-dom"

export default function About () {
    return (
        <div>
            <div className="img-nav-container">
            <img className="img" src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwaW4lMjBzdWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <div className="button-box">
                    <h3 className="button-box-header">Ready to Get Started?</h3>
                    <button className="button-box-button"><Link to="/contact">Contact Us</Link></button>
                </div>
            </div>

            <div className="about-text">
                <h2>About McCauley & Associates, P.C.</h2>
                <p>Established in 2005, McCauley & Associates, P.C., is a certified public accounting firm that provides full caging, accounting, treasury and reporting services for a large variety of political reporting entities, including Congressional and Senate campaigns, PACS, State and Local parties or candidate committees as well as other political entities including 527 and 501 (c)(4) organizations.</p>

                <br></br>

                <p>All services provided by McCauley & Associate are managed by professionals, who have accumulated many years of experience providing high quality political accounting services to clients. Our backgrounds include national firm experience and training, in addition to extensive experience with our own firm. We offer a full range of professional accounting services to meet the changing needs of our clients in both national and regional marketplaces, including filing of all IRS regulatory forms for client organizations such as 8871, 8872 and 990 forms.</p>

                <br></br>

                <p>Founded in 2005, McCauley & Associates was created to escape the traditional, big accounting firm environment enabling us to better serve our political clients. Our accounting firm consists of two partners, three professional staff members, and one support staff member.</p>

                <br></br>

                <p>Fully licensed for practice as Certified Public Accountants in the State of Utah, McCauley & Associates does not discriminate against any individual based on race, religion, sex, color, age, disability or national origin.</p>
            </div>

            <hr></hr>

            <div className="about-accountants-text">
                <img src=""/>
                <h2>Mike McCauley, CPA</h2>
                <h3>Partner, McCauley & Associates P.C.</h3>
                <p>Mike started his career in public accounting in 1993 after graduating with his Masters degree from Weber State University.  In 1997, he joined a large, national accounting firm with offices located in Salt Lake City. He was introduced to politics through the acquisition of another practice.  By 2004, as a Senior Manager, he had complete oversight and billing responsibility of the political reporting practice of the firm.  During that time, Mike grew the political reporting practice of the firm to include several State Republican Parties and Candidate Committees outside of the State of Utah.  In 2005, he started McCauley & Associates. Today the firm employs 4 people and provides caging and treasury services for a variety of clients throughout the country.</p>

                <br></br>

                <p>Since 1998, Mike has provided political consulting and compliance services to several State Republican Parties including The Arizona Republican Party, The Colorado Republican Party, The New Mexico Republican Party, The Wyoming Republican Party and the Utah Republican Party where he has served as Treasurer for 13 years.</p>

                <br></br>

                <p>In addition, Mike has provided caging, accounting, and compliance related services to a presidential committee, countless Senatorial and congressional campaigns including Senator Hatch (UT), Senator Lee (UT), Congressman John Curtis (UT), Congressman Rob Bishop (UT), The late Senator Bennett (UT), Congressman Chris Cannon (UT) and Congressman Bob Beauprez (CO). Other authorized principle campaign committees in which his services have been provided include Tim Bridgewater for Senate (UT), Chad Christensen for Senate (NV). Patricia Sullivan for Congress (FL), Friends of Mia Love (UT), Carl Wimmer for Congress (UT), Faye Stewart for Oregon (OR).  Corporate PACS include Energy Solutions, Inc and others.</p>

                <br></br>

                <p>Mike is a Certified Public Accountant and is affiliated with the following organizations:

                <li>American Institute of Certified Public Accountants</li>
                <li>Utah Association of Certified Public Accountants</li>
                <li>Associate Member – Certified Fraud Examiners</li>
                </p>

                <br></br>
                
                <p>He also serves on many boards and donates time to various charitable organizations including:

                <li>Treasurer – Salt Lake City NGA 2011, Inc</li>
                <li>Boy Scouts of America</li>
                <li>Utah Homeowners Association</li>
                </p>

                <br></br>
                
                <p>He has been married to Lisa for 33 years and they have four beautiful daughters.</p>
            </div>

            <hr></hr>

            <div className="about-accountants-text">
                <img src=""/>
                <h2>Steve McCauley</h2>
                <h3>Partner, McCauley & Associates P.C.</h3>
                <p>Steve started his career in Mortgage Banking in 1990 after graduating with an accounting degree from Weber State University. He joined Western Mortgage Loan Corporation to audit the Government Subsidized Housing program for the firm. In 1992 he became the manager for the Investor Accounting department where he oversaw the financial reporting and remittance processes related to all mortgage backed securities for a $4.2B portfolio. He was assigned to a special team to procure a $3.5B portfolio of subserviced loans from Merrill Lynch. He also oversaw the financial activity for various housing organizations such as Utah Housing, Idaho Housing and Housing Authority of Salt Lake which were backed by federally funded bond issues.</p>

                <br></br>

                <p>In 2000, Steve went to work for Fairbanks capital where he continued his career in Mortgage Banking and supervised a team specifically related to complex structured Mortgage Backed Security deals. In 2003, Credit Suisse purchased Fairbanks Capital and Steve became Vice President overseeing the Analytics team and the Investor Reporting Team.</p>

                <br></br>

                <p>In the beginning of 2008, Steve joined Goldman Sachs in Salt Lake City to head up a lending team for the Goldman’s Private Wealth Clients and managed a portfolio of $3.5B dollars. During the mortgage banking crisis of 2008, Steve helped retain the Private Wealth clients of Goldman Sachs prior to their announcement to become a banking institution at the end of that year.  He spent three and a half years developing and training a private wealth lending team and building an infrastructure to meet the varied needs of Goldman’s Sachs private wealth clientele.</p>

                <br></br>

                <p>In 2012 Steve left Goldman Sachs to start his own business, Accounting & Consulting Solutions, Inc. He has provided political consultation and compliance expertise to numerous Senatorial and Congressional campaigns. He also provides accounting and tax expertise to multiple small business owners in the Salt Lake metropolitan area.</p>

                <br></br>

                <p>He and his wife, Geri, have been married for 30+ years and have three successful children all living in the greater Salt Lake area.</p>
            </div>
        </div>
        
    )
}