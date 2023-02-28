
import ProjectCard from "./projectCard";
import './projectPage.css'
// import exampleImg from '../assets/myImg-light-small.png'

export default function ProjectPage(){

    const webdevData = [
        {
            id:'p1',
            imgSrc: 'something',
            title: 'Tenzies Game',
            description: `React based game where you tap on the dice to 
            change the number and keep tapping till all dice show same number`,
            link: 'https://www.github.com'
        },
        {
            id:'p2',
            imgSrc: 'something',
            title: 'Quizzical',
            description: `React based quiz game `,
            link: 'https://www.github.com'
        },
        {
            id:'p3',
            imgSrc: 'something',
            title: 'Expense Tracker',
            description: `React based expense tracker website`,
            link: 'https://www.github.com'
        }
    ]
    const uiuxData = [
        {
            id:'p1',
            imgSrc: 'something',
            title: 'Tenzies Game',
            description: `React based game where you tap on the dice to 
            change the number and keep tapping till all dice show same number`,
            link: 'https://www.github.com'
        },
        {
            id:'p2',
            imgSrc: 'something',
            title: 'Quizzical',
            description: `React based quiz game `,
            link: 'https://www.github.com'
        },
        {
            id:'p3',
            imgSrc: 'something',
            title: 'Expense Tracker',
            description: `React based expense tracker website`,
            link: 'https://www.github.com'
        }
    ]

    const webProjects = webdevData.map(project =>{
        return(
            <ProjectCard 
                key={project.id}
                id={project.id}
                src={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
            />
        )
    })
    const uiuxProjects = uiuxData.map(project =>{
        return(
            <ProjectCard 
                key={project.id}
                id={project.id}
                src={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
            />
        )
    })
    return(
        <div className="container">
            <h2>PROJECTS</h2>
            <div className="webDev">
                <h3>Web Development</h3>
                <div>
                {webProjects}
                </div>
            </div>
            <div className="uiux">
                <h3>UI/UX Work</h3>
                <div>
                {uiuxProjects}
                </div>
            </div>
        </div>
    )
}