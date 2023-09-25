import React, { useState, useEffect } from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  // Function to handle window resize
  const handleResize = () => {
    setViewportWidth(window.innerWidth)
  }

  useEffect(() => {
    // Add a resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Conditionally render only the first 6 elements if viewport width is less than 480px
  const maxElementsToShow = viewportWidth < 480 ? 6 : technologies.length

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.slice(0, maxElementsToShow).map((technology, i) => (
        <div className="w-20 h-20" key={i}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
