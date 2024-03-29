import KanbanBoard from "../media/images/KanbanBoard.png";
import PasswordGenerator from "../media/images/PasswordGenerator.png";
import RecommendedMovies from "../media/images/RecommendedMovies.png";
import PiCSSa from "../media/images/PiCSSa.png";
import WebQuiz from "../media/images/WebQuiz.png";
import MemoryCards from "../media/images/MemoryCards.png";

const technologies = {
    github : {
        name : "GitHub",
        color : "", 
    },
    javascript : {
        name : "JavaScript",
        color : "", 
    },
    react : {
        name : "React",
        color : "", 
    },
    django : {
        name : "Django",
        color : "", 
    },
    python : {
        name : "Python",
        color : "", 
    },
    css : {
        name : "CSS",
        color : "", 
    },
    html : {
        name : "HTML",
        color : "", 
    },
    astro : {
        name : "Astro",
        color : "", 
    },
    tailwind : {
        name : "Tailwind",
        color : "",
    },
    bootstrap : {
        name : "Bootstrap",
        color : "",
    },
    styleComponents : {
        name : "Style Components",
        color : "",
    },
    materialUI : {
        name : "Material UI",
        color : "",
    },
    SQL : {
        name : "SQL",
        color : "",
    },
    Godot : {
        name : "Godot",
        color : "",
    },
    GDScript : {
        name : "GDScript",
        color : "",
    },
}

export const projectsInterface = {
    title : {
        spanish: "Proyectos",
        english: "Projects",
    }
}

export const projectRepository = [
    {
        id : "0",
        title : {
            spanish : "Tarjetas de Memoria",
            english : "Memory Cards",
        },
        description : [
            {
                spanish:"Software desarrollado para la tesis 'Sistemas de información como herramienta para reforzar el aprendizaje', asesorada por el Ing. Aquiles Torrealba. Requerimiento para optar por el título de Ingeniero en Sistemas.",
                english:"Software developed for the thesis 'Information Systems as a Tool to Reinforce Learning', advised by Engineer Aquiles Torrealba. A requirement to obtain the title of Systems Engineer."
            },
            {
                spanish:"Implementa la metodología de Flashcards, ideada por Sebastian Letner en la década de 1980. Esta metodología permite repasar información en sesiones cortas y espaciadas a lo largo del tiempo, lo que facilita la memorización.",
                english:"Implements the Flashcards methodology, devised by Sebastian Letner in the 1980s. This methodology allows you to review information in short and spaced sessions over time, which facilitates memorization."
            },
            {
                spanish:"Gracias a la elaboración y presentación de este proyecto, se obtuvo la calificación de 20 puntos (la más alta) y una mención honorífica otorgada por el Ingeniero Edgar Millán, y las Ingeniero, Guiomar Hernández y Gregorina Malavé.",
                english:"Thanks to the preparation and presentation of this project, the highest grade of 20 points was obtained, as well as an honorable mention awarded by Engineer Edgar Millán, Engineer Guiomar Hernández and Engineer Gregorina Malavé."
            }
        ],
        url : "https://www.linkedin.com/in/sagg1608/overlay/urn:li:fsd_profileProject:(ACoAAD1XI2IBrd-H7qb5j6QJTZlCFGpe6WrTIPI,1956478760)/treasury/",
        githubUrl : "https://github.com/16SAGG/Active_Recall_IS",
        technologies : [technologies.github, technologies.Godot, technologies.GDScript, technologies.SQL],
        image : MemoryCards.src,
    },
    {
        id : "1",
        title : {
            spanish : "PiCSSa",
            english : "PiCSSa",
        },
        description : [
            {
                spanish:"PiCSSa es una herramienta online que permite a los usuarios crear dibujos y animaciones en pixel art y exportarlos a código CSS. El desarrollo de PiCSSa aún no ha finalizado, ya que su versión para móviles no ha sido implementada.",
                english:"PiCSSa is an online tool that allows users to create pixel art drawings and animations and export them to CSS code. The development of PiCSSa is not yet finished, as its mobile version has not yet been implemented."
            },
            {
                spanish:"El proyecto fue desarrollado con el objetivo de mejorar las habilidades del autor en CSS y aprender el uso de los Style Components.",
                english:"The project was developed with the aim of improving the author's CSS skills and learning how to use Style Components."
            },
            {
                spanish:"La animaciones Pixel Art mostradas en la pantalla de inicio fueron hechas con PiCSSa.",
                english:"The Pixel Art animations shown on the home screen were made with PiCSSa."
            },
            {
                spanish:"PiCSSa se basa en el proyecto 'Pixel Art to CSS' desarrollado por JValen.",
                english:"PiCSSa is based on the 'Pixel Art to CSS' project developed by JValen."
            }
        ],
        url : "https://picssa.onrender.com",
        githubUrl : "https://github.com/16SAGG/PiCSSa",
        technologies : [technologies.github, technologies.react, technologies.javascript, technologies.css, technologies.html, technologies.styleComponents],
        image : PiCSSa.src,
    },
    {
        id : "2",
        title : {
            spanish : "Web Quizz",
            english : "Web Quizz",
        },
        description : [
            {
                spanish:"Web Quizz es un juego de preguntas online que permite a los usuarios poner a prueba sus conocimientos en programación. El juego presenta preguntas de tres lenguajes de programación: JavaScript, Java y Python.",
                english:"Web Quizz is an online quiz game that allows users to test their programming knowledge. The game presents questions from three programming languages: JavaScript, Java, and Python."
            },
            {
                spanish:"Web Quizz fue desarrollado con el objetivo de aprender Material UI y mejorar los conocimientos en React.",
                english:"Web Quizz was developed with the aim of learning Material UI and improving React skills."
            },
        ],
        url : "https://web-quizz.onrender.com",
        githubUrl : "https://github.com/16SAGG/Web-Quizz",
        technologies : [technologies.github, technologies.react, technologies.javascript, technologies.css, technologies.html, technologies.materialUI],
        image : WebQuiz.src,
    },
    {
        id : "3",
        title : {
            spanish : "Peliculas Recomendadas",
            english : "Recommended Movies",
        },
        description : [
            {
                spanish:"Esta página web estática recopila mis películas favoritas. Creado con el objetivo de aprender Astro y Tailwind, y para probar la API de View Transitions.",
                english:"This static website collects my favorite movies. It was created with the aim of learning Astro and Tailwind, and to test the View Transitions API."
            },
        ],
        url : "https://16sagg.github.io/RecommendedMovies/",
        githubUrl : "https://github.com/16SAGG/RecommendedMovies",
        technologies : [technologies.github, technologies.astro, technologies.react, technologies.javascript, technologies.css, technologies.html, technologies.tailwind],
        image : RecommendedMovies.src,
    },
    {
        id : "4",
        title : {
            spanish : "Tablero Kanban",
            english : "Kanban Board",
        },
        description : [
            {
                spanish:"Esta aplicación web permite a los usuarios crear, modificar, eliminar tareas; cambiar su posición dentro del tablero y añadir fechas límites a cada una. Además, cuenta con un sistema de inicio de sesión para proteger el acceso a las tareas.",
                english:"This web application allows users to create, modify, and delete tasks; change their position within the board, and add deadlines to each one. It also has a login system to protect access to the tasks."
            },
            {
                spanish:"Kanban es un método para gestionar el flujo de trabajo que te ayuda a visualizar tu trabajo, optimizar el flujo y mejorar la entrega.",
                english:"Kanban is a workflow management method that helps you visualize your work, optimize flow, and improve delivery."
            },
            {
                spanish:"La aplicación fue desarrollada con el objetivo de mejorar las habilidades del autor en Django y Bootstrap.",
                english:"The application was developed with the aim of improving the author's skills in Django and Bootstrap."
            },
        ],
        url : "/",
        githubUrl : "https://github.com/16SAGG/Task_manager",
        technologies : [technologies.github, technologies.django, technologies.python, technologies.html, technologies.css, technologies.bootstrap, technologies.SQL],
        image : KanbanBoard.src,
    },
    {
        id : "5",
        title : {
            spanish : "Generador de Contraseñas",
            english : "Password Generator",
        },
        description : [
            {
                spanish:"Esta aplicación web permite generar contraseñas seguras y personalizadas utilizando un algoritmo hash.",
                english:"This web application allows you to generate secure and personalized passwords using a hash algorithm."
            },
            {
                spanish:"La aplicación ofrece la posibilidad de elegir la longitud de la contraseña deseada, indicar un texto como punto de partida para la generación de la contraseña; y elegir, si se desea incluir mayúsculas, números o caracteres especiales. Además, se puede optar por almacenar la contraseña en la base de datos de la aplicación para acceder a ella posteriormente.",
                english:"The application offers the possibility to choose the desired password length, indicate a text as a starting point for the password generation, and choose whether to include uppercase letters, numbers or special characters. Additionally, you can choose to store the password in the application's database for later access."
            },
            {
                spanish:"Desarrollada con el objetivo de aprender Django, Python y Bootstrap.",
                english:"Developed with the aim of learning Django, Python and Bootstrap."
            }
        ],
        url : "/",
        githubUrl : "https://github.com/16SAGG/Password-generator",
        technologies : [technologies.github, technologies.django, technologies.python, technologies.html, technologies.css, technologies.bootstrap, technologies.SQL],
        image : PasswordGenerator.src,
    },
]