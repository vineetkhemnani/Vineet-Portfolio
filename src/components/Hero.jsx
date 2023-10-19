import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import React, { useState, useEffect, useRef } from 'react'
import VANTANET from 'vanta/dist/vanta.net.min.js'

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      const minWidth = window.innerWidth > 768 ? 200.0 : 100.0
      const minHeight = window.innerHeight > 768 ? 200.0 : 100.0
      setVantaEffect(
        VANTANET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight,
          minWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x5d0cb9,
          backgroundColor: 0x80211,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} id="your-element-selector" className="min-h-screen">
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{' '}
              <span className="hero-container">
                <h2 className="hero glitch layers" data-text="Vineet">
                  <span>Vineet</span>
                </h2>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces &nbsp;
              <br className="sm:block hidden" />
              and web applications
            </p>
          </div>
        </div>

        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero
