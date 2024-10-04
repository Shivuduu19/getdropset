import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Skill = ({ skill, index }) => {
    const [tranfrom, setTransform] = useState(0)
    const [skillState, setSkillState] = useState(0)
    const skillRef = useRef(null)
    useEffect(() => {
        if (index === 0) {
            setTransform(0)
        } else if (index === 1) {

            setTransform(index * -20)
        } else {
            setTransform(10)
        }

        const key = setInterval(() => {
            setSkillState(prev => prev + 1)
            // setTransform(prev => prev + 10)


        }, 2000);
        return () => clearInterval(key)

    }, [])
    useEffect(() => {


        if (skillState === 3) {
            setSkillState(0)
            if (index === 2) {
                setTransform(10)
            } else if (index === 1) {
                setTransform(-20)
            } else {
                setTransform(0)
            }
        } else if (skillState === 2) {
            if (index === 2) {
                setTransform(0)
            } else if (index === 1) {
                setTransform(10)
            } else {
                setTransform(-20)
            }
        } else if (skillState === 1) {
            if (index === 2) {
                setTransform(-20)
            } else if (index === 1) {
                setTransform(0)
            } else {
                setTransform(10)
            }
        }

    }, [skillState])




    return (
        <span style={{ transform: `translateY(${tranfrom}px)` }} ref={skillRef} className={`${index === skillState ? ' opacity-[1] delay-[.4s] duration-[0.6s]' : index - 1 === skillState ? 'duration-[0.6s] absolute opacity-0' : 'absolute opacity-0'} bottom-0    transition-all [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] duration-[0.6s] block p-0 m-0`}>
            <span className='bg-[#ddfc9d] outline outline-2 outline-[#ddfc9d] rounded-[4px] leading-[1.4] outline-offset-0 border-l-4 border-solid border-r-4 border-b-2 border-[#ddfc9d] text-[#000] '>{skill}</span>
        </span>
    )
}

export default Skill