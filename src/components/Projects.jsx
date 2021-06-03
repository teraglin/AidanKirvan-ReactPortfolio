import React, { Component } from 'react'
import {projects} from '../data/projects'

class Projects extends Component {
    //set selected project to this.setState
    //otherwise it shows all

    // showProjects = (input) => {

    // }

    render(){
        return (
            <div className="page-component-container-projects w-full">
                <h1 className="page-heading text-3xl text-left mt-5">PROJECTS</h1>
    
                    {projects.map(project => (
                        <div className="project-card my-5 w-full sm:w-11/12">
                            <h1 className="card-header text-2xl">{project.projectName}</h1>
                            <div className="card-body sm:flex">
                                <img src={project.image} alt={project.projectName} className="card-image w-screen h-full sm:w-6/12" />
                                <div className="card-info flex flex-col justify-between h:full sm:w-6/12" >
                                    <p className="m-5">{project.description}</p>
                                    <a href={project.link} target="blank">LINK</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }

}

export default Projects


  
