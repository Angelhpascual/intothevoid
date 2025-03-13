import Rocket from "./Rocket"

const GameBoard = () => {
  return (
    <div className="relative mx-auto w-[90%] h-[70vh] max-h-[600px] max-w-[400px] overflow-hidden  bg-black flex items-center justify-center z-1">
      <div className="h-10 w-1/4 m-[10px] absolute top-0 right-0 bg-amber-300 text-black font-bold flex justify-center items-center leading-none">
        <span>Score: KM</span>
      </div>
      <Rocket />
    </div>
  )
}

export default GameBoard
