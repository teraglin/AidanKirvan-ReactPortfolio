import React, { Component } from 'react'
import {projects} from '../data/projects'

class Projects extends Component {

    render(){
        return (
            <div className="page-component-container-projects w-full">
                <h1 className="page-heading text-3xl text-left mt-5">PROJECTS</h1>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card my-5 w-11/12">
                            <h1 className="card-header text-2xl">{project.projectName}</h1>
                            <div className="card-body sm:flex">
                                <img src={project.image} alt={project.projectName} className="card-image w-screen h-full sm:w-6/12" />
                                <div className="card-info flex flex-col justify-between text-lg h:full sm:w-6/12" >
                                    <p className="m-5">{project.description}</p>
                                    <a href={project.link} target="blank" className="project-link">CLICK HERE TO CHECK IT OUT</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }

}

export default Projects


  
