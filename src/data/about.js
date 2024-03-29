import { projectRepository } from "./projects"

export const about ={
    head:{
        spanish: "Hola, Soy Samuel González.",
        english: "Hello, I'm Samuel González."
    },
    content:{
        spanish: "Desarrollador Frontend de 23 años, graduado como Ingeniero de Sistemas en la Universidad Santa María. Me encanta crear interfaces de usuario que sean intuitivas y atractivas con el objetivo de brindar una experiencia excepcional.",
        english: "23-year-old Frontend Developer, graduated as a Systems Engineer from Universidad Santa María. I love creating intuitive and engaging user interfaces with the aim of providing an exceptional experience."
    }
}
export const moreItemsData = {
    career : {
        head: {
            spanish: "Sistemas",
            english: "Systems"
        },
        content: {
            spanish: "ING",
            english: "ENG",
        }
    },
    englishLevel : {
        spanish : "Inglés",
        english : "English",
    },
    spanishLevel : {
        spanish : "Español",
        english : "Spanish",
    },
    age : {
        head: {
            spanish: "23",
            english: "23"
        },
        content: {
            spanish: "Años de Edad",
            english: "Years Old",
        }
    },
    projectsCreated : {
        head: {
            spanish: `${projectRepository.length}`,
            english: `${projectRepository.length}`
        },
        content: {
            spanish: "Proyectos Creados",
            english: "Projects Created",
        }
    }
}