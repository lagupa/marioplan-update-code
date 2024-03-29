import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  // console.log(props)

  const { project } = props
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorLastName + " " + project.authorFirstName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  // console.log(state)

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
