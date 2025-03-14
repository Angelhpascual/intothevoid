import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const Rocket = ({ boardWidth }) => {
  const [position, setPosition] = useState(50)
  const ROCKET_WIDTH = 56
  const MOVE_STEP = 15

  const minPosition = 5
  const maxPosition = 95

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          setPosition((prev) => Math.max(minPosition, prev - MOVE_STEP))
          break
        case "ArrowRight":
          setPosition((prev) => Math.min(maxPosition, prev + MOVE_STEP))
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [minPosition, maxPosition])

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
