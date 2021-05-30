import React, { Component } from 'react'
import {projects} from '../data/projects'

class Projects extends Component {
    //set selected project to this.setState
    //otherwise it shows all

    // showProjects = (input) => {

    // }

    render(){
        return (
            <div className="page-component-container-projects">
                <h1 className="font-bold">LOOK  AT WHAT I'VE DONE</h1>
                <ul>
                    {projects.map(project => (
                        <div className="project-card m-2">
                            <h1>{project.projectName}</h1>
                            <p>{project.description}</p>
                            <a href={project.link}>LINK</a>
                            <img src={project.image} alt={project.projectName} />
                        </div>
                        
                    ))}
                </ul>
            </div>
        )
    }

}

export default Projects


  
