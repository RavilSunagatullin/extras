import { Cell } from '../Cell.ts'
import { Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'
import logo from '../../assets/white-rook.png';
import logoBlack from '../../assets/black-rook.png';
export class Rook extends Figure{
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.WHITE ? logo : logoBlack;
		this.name = FigureNames.ROOK;
	}
	canMove(target: Cell): boolean {
		if(!super.canMove(target)){
			return false
		}
		if(this.cell.isEmptyVertical(target)){
			return true
		}
		if(this.cell.isEmptyHorizontal(target)){
			return true
		}
		return false
	}
}