import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(item => {
        return (
          <Link to={'/project/' + item.id} key={item.id}>
            <ProjectSummary author={`${item.authorFirstName} ${item.authorLastName}`} title={item.title} content={item.content} date={item.createdAt.seconds} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
