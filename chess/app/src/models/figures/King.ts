import logoBlack from '../../assets/black-king.png'
import logo from '../../assets/white-king.png'
import { Cell } from '../Cell.ts'
import { Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.WHITE ? logo : logoBlack
		this.name = FigureNames.KING
	}
	
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)
		// const x =
		if (dx === 1 && dy === 1) {
			return true
		}
		if (target.x + 1 === this.cell.x && target.y === this.cell.y) {
			return true
		}
		if (target.x - 1 === this.cell.x && target.y === this.cell.y) {
			return true
		}
		if (target.y + 1 === this.cell.y && target.x === this.cell.x) {
			return true
		}
		if (target.y - 1 === this.cell.y && target.x === this.cell.x) {
			return true
		}
		return false
	}
}