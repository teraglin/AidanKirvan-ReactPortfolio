import React from 'react'

const About = () => {
    return (
        <div className="page-component-container-projects">
            <h1 className="page-heading text-3xl text-left">ABOUT</h1>
            <div>
            <p>Here is the summary</p>
            <img alt={'profile'} src={"https://avatars.githubusercontent.com/u/67266954?v=4"} />
            </div>
            
            <h1 className="page-heading text-3xl text-left">CORE SKILLS</h1>
            <p>Here are my core skills</p>
            <h1 className="page-heading text-3xl text-left">OTHER SKILLS</h1>
            <p>Here are my other skils</p>
            <h1 className="page-heading text-3xl text-left">COMMUNITY AND OTHER INTERESTS</h1>
            <p>Here are things that I am interested in</p>
        </div>
    )
}

export default About