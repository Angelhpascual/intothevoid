import React from "react"
import { useEffect, useState } from "react"

const Asteroids = () => {
  const [asteroids, setAsteroids] = useState([])
  const FALL_SPEED = 3
  const ASTEROID_SIZE = 40

  //Create a new asteroid every 2 seconds
  useEffect(() => {
    const createInterval = setInterval(() => {
      const newAsteroid = {
        id: Date.now(),
        position: {
          x: Math.random() * 400,
          y: -10,
        },
      }
      setAsteroids((prev) => [...prev, newAsteroid])
    }, 2000)

    return () => clearInterval(createInterval)
  }, [])

  //Move asteroids every 50ms
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setAsteroids((prev) =>
        prev
          .map((asteroid) => ({
            ...asteroid,
            position: {
              ...asteroid.position,
              y: asteroid.position.y + FALL_SPEED,
            },
          }))
          .filter((asteroid) => asteroid.position.y < 800)
      )
    }, 50)

    return () => clearInterval(moveInterval)
  }, [])

  return (
    <>
      {asteroids.map((asteroid) => (
        <img
          key={asteroid.id}
          src="/asteroid.svg"
          alt="Asteroid"
          className="absolute"
          style={{
            left: `${asteroid.position.x}px`,
            top: `${asteroid.position.y}px`,
            width: `${ASTEROID_SIZE}px`,
            height: `${ASTEROID_SIZE}px`,
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </>
  )
}

export default Asteroids
