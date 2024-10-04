import athletic from './assets/66090afb9296b283f07eef92_Athletic-text.svg'
import bydesign from './assets/66090ac4eef4f37b60e5c35f_By-design-text.svg'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react'
import Multiverse from './Multiverse'


function App() {
  const divref = useRef(null)
  const [trnafromX, setTransfromX] = useState(0)
  const { scrollYProgress } = useScroll({
    target: divref,
    offset: ['start end', 'end start']
  })
  const transformXvalue = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -8])
  const opacityValue = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  useMotionValueEvent(transformXvalue, "change", (latest) => {
    // console.log("x changed to", latest)
    setTransfromX(latest)
  })



  const divVariantws = {
    moving1: {
      x: `${trnafromX}vw`,

    },
    moving2: {
      x: `${-trnafromX}vw`
    }
  }

  return (
    <>
      <div className='h-screen w-screen'></div>
      <section className="mt-[128px] overflow-hidden ">
        <div className="h-full max-w-[940px] mx-auto">
          <motion.div ref={divref} className="flex flex-col w-full gap-2  items-start ">
            <motion.img style={{ opacity: opacityValue }} transition={{ duration: 0 }} animate='moving1' variants={divVariantws} src={athletic} alt="" />
            <motion.img transition={{ duration: 0 }} animate='moving2' variants={divVariantws} src={bydesign} alt="" />
          </motion.div>
        </div>
      </section>
      <div className='h-screen w-screen'></div>
      <Multiverse />
    </>
  )
}

export default App
