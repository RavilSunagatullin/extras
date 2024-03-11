import { useEffect, useState } from 'react'
import BoardComponent from './components/BoardComponent'
import LostFigures from './components/lostFigures.tsx'
import { Board } from './models/Board.ts'
import { Colors } from './models/Colors.ts'
import { Player } from './models/Player.ts'

const App = () => {
	const [board, setBoard] = useState(new Board())
	// @ts-ignore
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
	// @ts-ignore
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
	
	useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])
	
	function swapPlayer() {
		setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
	}
	
	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}
	
	return (
		<div className={'app'}>
			<BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
			<div className={'info'}>
				<LostFigures title="Черные фигуры" figures={board.lostBlackFigures}/>
				<LostFigures title="Белые фигуры" figures={board.lostWhiteFigures}/>
				<button onClick={restart}>Заново</button>
			</div>
		</div>
	)
}

export default App
