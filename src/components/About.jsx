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
            <ul>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Customer Service</li>
                <li>Teaching</li>
                <li>Conflict Resolution</li>
                <li>Learning</li>
                <li>Time Management</li>
            </ul>
            <h1 className="page-heading text-3xl text-left">OTHER SKILLS</h1>
            <p>Here are my other skils</p>
            <ul>
                <li>Illustration</li>
                <li>Writing</li>
                <li>Logic X</li>
                <li>Ableton Live</li>
                <li>Procreate</li>
                <li>Guitar/Saxophone/Keys</li>
            </ul>
            <h1 className="page-heading text-3xl text-left">COMMUNITY AND OTHER INTERESTS</h1>
            <p>Here are things that I am interested in</p>
            <ul className="text-left">
                <li>Tabletop Gaming</li>
                <li>Roleplay Gaming</li>
                <li>Videogames</li>
                <li>Web and App integration for Tabletop Gaming</li>
                <li>Music</li>
                <li>Sound Recording and Production</li>
            </ul>
        </div>
    )
}

export default About