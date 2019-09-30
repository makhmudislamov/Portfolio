import React from 'react'
import Project from './Project'
import './PageContent.css'

function PageContent() {
    return (
        <div className="PageContent">
            <Project title="Tetris Dots" image="/images/project2.jpeg" link="#" />
            <Project title="Zombie Server" image="/images/project.png" link="#" />
            <Project title="Amazing Colors" image="/images/project2.jpeg" link="#" />
            <Project title="Flip Toggle" image="/images/project.png" link="#" />
            <Project title="121 Second St" image="/images/project2.jpeg" link="#" />
            <Project title="Slide Shows" image="/images/project.png" link="#" />
        </div>
    )
}

export default PageContent