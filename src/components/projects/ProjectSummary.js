import React from 'react'

const ProjectSummary = ({ title, author, date }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{title}</span>
        <p>Posted by {author}</p>
        <p className="grey-text">Posted on {date}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
