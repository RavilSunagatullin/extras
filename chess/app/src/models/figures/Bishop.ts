import logoBlack from '../../assets/black-bishop.png'
import logo from '../../assets/white-bishop.png'
import { Cell } from '../Cell.ts'
import { Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'

export class Bishop extends Figure{
	
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.WHITE ? logo : logoBlack;
		this.name = FigureNames.BISHOP;
	}
	canMove(target: Cell): boolean {
		if(!super.canMove(target)){
			return false
		}
		if(this.cell.isEmptyDiagonal(target)){
			return true
		}
		return false
	}
}