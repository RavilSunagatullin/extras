import { Cell } from '../Cell.ts'
import { Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'
import logo from '../../assets/white-knight.png';
import logoBlack from '../../assets/black-knight.png';
export class Knight extends Figure{
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.WHITE ? logo : logoBlack;
		this.name = FigureNames.KNIGHT;
	}
	canMove(target: Cell): boolean {
		if(!super.canMove(target)){
			return false
		}
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)
		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}