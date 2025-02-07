import React from 'react'

const PrivacypolicyPage = () => {
  return (
    <div class="container-fluid" style={{
        height: "100%;",
        fontFamily:"Lexend",
        textAlign:"justify",
        background:"#ffffff"
    }}>
        <div class="row ">
            <div class="policy-main" style={{border:"10px solid #162f4b"}}>
                <div class="policy mt-4">
                <h4 style={{marginTop:'10px',color:"#162f4b"}}>SRNR IT Solutions Privacy Statement</h4>
                <p>This privacy statement is effective as of Jan 06, 2024. Please note that this privacy statement will regularly be updated to reflect any changes in the way we handle your personal data or any changes in applicable laws.</p>
                <p>Unless stated otherwise, this privacy statement applies to all of SRNR IT Solutions externally facing applications, services, games, tools, websites, and other data processing activities where SRNR IT Solutions is acting as a data controller (or any local equivalent).</p>
                <p>In case you have special accessibility needs to access the content of this statement, we recommend that you or someone on your behalf consult our Accessibility Statement and recommendations.</p>
                <h4 style={{color:"#162f4b"}}>How does SRNR IT Solutions protect your personal data?</h4>
                <p>SRNR IT Solutions attaches great importance to your right to privacy and the protection of your personal data. We want you to feel secure that when you deal with SRNR IT Solutions, your personal data are in good hands.</p>
                <p>SRNR IT Solutions protects your personal data in accordance with applicable laws and our data privacy policies. In addition, SRNR IT Solutions maintains the appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and/or against accidental loss, alteration, disclosure or access, or accidental or unlawful destruction of  damage thereto.</p>
                <h4 style={{color:"#162f4b"}}>Categories of Personal Data</h4>
                <p>We collect personal data of our employees, potential employees, clients, and their current/former/prospective employees/directors, suppliers, business contacts, shareholders, and website users. The personal data we collect includes:</p>
            <ul className="list-style-cricle">
                <li><span style={{fontWeight:"bold"}}>Personal details:</span> Name, pronoun, identifiers, contact details (e.g., email, phone).</li>
                <li><span style={{fontWeight:"bold"}}>Commercial information:</span> History and records of products/services obtained.</li>
                <li><span style={{fontWeight:"bold"}}>Marketing and research information:</span> IP address, demographic data, browser history, social media content.</li>
                <li><span style={{fontWeight:"bold"}}>Sensitive data:</span> Health information, biometric data.</li>
                <li><span style={{fontWeight:"bold"}}>Audiovisual materials:</span> Images/footage captured during events.</li>
                <li><span style={{fontWeight:"bold"}}>Professional information: </span>Job title, employer, and location.</li>
            </ul>
                <h4 style={{color:"#162f4b"}}>How do we use personal data?</h4>
                <p>SRNR IT Solutions uses your personal data for various purposes, including:</p>
                <ul className='list-style-circle'>
                <li>Managing our contractual and/or employment relationship with you.</li>
                <li>Facilitating communication and support capabilities.</li>
                <li>Operating and managing our business operations.</li>
                <li>Complying with legal requirements.</li>
                <li>Marketing our products and services to you.</li>
                </ul>
                <h4 style={{color:"#162f4b"}}>Will we share your personal data with third parties?</h4>
                <p>We may transfer personal data to service providers, public authorities, and third parties in connection with SRNR IT Solution's operation of its business.</p>
                <h4 style={{color:"#162f4b"}}>Your Rights</h4>
                <p>You are entitled to:</p>
                <ul className='list-style-circle'>
                <li>Request access of your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Object to the processing of your personal data.</li>
                <li>Request deletion of your personal data.</li>
                <li>Request restriction of processing.</li>
                <li>Request portability of your personal data.</li>
                </ul>
                <h4 style={{color:"#162f4b"}}>Contact Us</h4>
                <p className='pb-2'>If you have questions about this privacy statement, wish to exercise your rights, or make a complaint, please contact our Data Privacy Officer at:  <span style={{color:'blue',textDecoration:'underline'}}>srnritsolutions@gmail.com.</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrivacypolicyPage
