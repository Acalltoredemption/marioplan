import React from 'react';
import moment from 'moment'
const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darkened-3">
            <span className="card-title">{project.title}</span>
            <p>{project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text">{project.createdAt.toDate().toString()}</p>
        </div>
    </div>
    )
}

export default ProjectSummary;