import './MobSkills.css'
import React from 'react'
import techStack from '../assets/techStack-mob.png'
import skillsPng from '../assets/skills-mob-light.png'

export default function MobSkills() {
    return(
        <div className='container'>
            <div className='techStack'>
                <h2>TECH STACK USED</h2>
                <img src= {techStack} alt='tech stack icons'/>
            </div>
            <div className='skills'>
                <h2>SKILLS</h2>
                <img src= {skillsPng} alt='visual rep of skills' />
            </div>
        </div>
    )
}