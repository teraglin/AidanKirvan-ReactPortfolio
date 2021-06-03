import React from 'react'
import linkedinContactIcon from '../images/icon-contact-linkedin.png'
import twitterContactIcon from '../images/icon-contact-twitter.png'

const Contact = () => {
    return (
        <div className="page-component-container w-full">
            <h1 className="font-bold">Contact me ...</h1>

            {/* linkedin  */}
            <div className="contact-card flex w-11/12 justify-center my-5">
                <img src={linkedinContactIcon} className="tech-logo" alt="linkedin-contact" />
                <a href="https://www.linkedin.com/in/aidan-kirvan-376b0a1ba/" target="blank" className="contact-link flex w-full h-full justify-center items-center text-3xl">Aidan Kirvan</a>
            </div>

            {/* twitter  */}
            <div className="contact-card flex w-11/12 justify-center my-5">
                <img src={twitterContactIcon} className="tech-logo" alt="twitter-contact" />
                <a href="https://twitter.com/kakaposaur" target="blank" className="contact-link flex w-full h-full justify-center items-center text-3xl">@kakaposaur</a>
            </div>
        </div>
    )
}

export default Contact