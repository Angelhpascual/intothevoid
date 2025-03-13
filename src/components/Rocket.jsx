import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const Rocket = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        setPosition(position - 10)
        console.log("ArrowLeft")
      } else if (event.key === "ArrowRight") {
        setPosition(position + 10)
        console.log("ArrowRight")
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [position])

  return (
    <img
      className="h-22 w-14 absolute transition-all duration-100 bottom-5"
      src="/rocketShip.svg"
      alt="Rocket"
      style={{ left: `${position}%`, transform: "translateX(-50%)" }}
    />
  )
}

export default Rocket
