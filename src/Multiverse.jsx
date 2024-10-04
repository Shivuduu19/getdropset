import React, { useEffect, useLayoutEffect, useState } from 'react'
import Skill from './multiverse/Skill'

const Multiverse = () => {
    const skills = ['AI skills', 'data skills', 'tech skills']
    return (
        <div className='text-left bg-white flex justify-center h-screen items-center'>
            <h1 className='text-[3.75rem] leading-[1.2] font-[670] tracking-[-0.02em] relative'>
                <span className=' '>
                    Upskill your team with
                    <span className='block relative '>
                        {skills.map((skill, index) =>
                            <Skill skill={skill} key={index} index={index} />
                        )}

                    </span>
                </span>
            </h1>
        </div>
    )
}





export default Multiverse