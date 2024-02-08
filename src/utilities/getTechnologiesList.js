import { projectRepository } from "../data/projects"

export const getTechnologiesList = ()=>{
    const technologiesList = []
    
    projectRepository.map(project =>{
        project.technologies.map(technology =>{
            const nonAddedTechnology = technologiesList.find(
                (addedTechnology) => addedTechnology === technology.name
            ) === undefined

            if (nonAddedTechnology) technologiesList.push(technology.name)
        })
    })

    return technologiesList
}