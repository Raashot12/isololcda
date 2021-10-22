import React from 'react'
import Layout from '../components/layout'
import ProjectHero from '../components/Project/ProjectHero'
import Projectscard from '../components/Project/Projectscard'

const project = () => {
    return (
        <Layout>
            <ProjectHero />
            <Projectscard />
        </Layout>
    )
}

export default project
