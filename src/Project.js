import React from 'react'
import './Project.css'

// USING PROPS
// function Project(props) {
//     return (
//         <div>
//             <img src={props.image} width="300" height="200" />
//             <h3>{props.image}</h3>
//             <a href={props.link}>Link to project</a>
//         </div>
//     )
// }


// DECONSTRUCTING PROPS
function Project({ image, title, link }) {
    return (
        <div className="Project">
            <img className="image" src={image} width="300" height="200" />
            <h3 className="title">{title}</h3>
            <a className="link" href={link}>Link to project</a>
        </div>
    )
}
export default Project