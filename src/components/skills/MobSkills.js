import './MobSkills.css'
import React from 'react'
import techStack from '../assets/techStack-mob.png'
import skillsPngLight from '../assets/skills-mob-light.png'
import skillsPngDark from '../assets/skills-small-dark.png'

export default function MobSkills({isDarkMode}) {
    return(
        <div className='container' style={{backgroundColor: isDarkMode ? "white" : "#212529" }}>
            <div className='techStack'>
                <h2 style={{color: isDarkMode ? "#212529" : "white" }}>TECH STACK USED</h2>
                <img src= {techStack} alt='tech stack icons'/>
            </div>
            <div className='skills'>
                <h2 style={{color: isDarkMode ? "#212529" : "white" }}>SKILLS</h2>
                <img src= {isDarkMode? skillsPngLight : skillsPngDark} alt='visual rep of skills' />
            </div>
        </div>
    )
}