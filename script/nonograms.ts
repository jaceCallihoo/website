enum setReturn { MISS, HIT, KNOWN, OOB }

export class nonograms {

	height:number;			// height of the board
	width:number;			// width of the board
	input:boolean[][];		// stores wich input targets have been guessed
	board:boolean[][];		// stores the values of boards tiles
	horizontal:number[][];	// stores the horizontal border values
	vertical:number[][];	// stores the vertical border values

	// > newGame(height: height of the board, width: width of the board)
	// DESC: 	Generates an n x m nonograms board where both n and m are >= 2.
	//			If width is not given it's value is defaulted to hight
	// RETURN:	- false if the given arguments are valid parameters
	//			- true otherwise
	newGame(height:number, width:number=height):boolean {

		// check validity of parameters
		if (height < 2 || width < 2)
			return false;

		this.height = height;
		this.width = width;

		this.setInput();	// set all input tiles to false
	    this.setBoard();	// generate the values on the board
	    this.setBorder();	// define the borders based on the values on the board
		this.print();

		return true;
	}

	// > setInput()
	// DESC:	Initialize all elements of the input array to false as no targets have
	//			been geussed
	setInput():void {
		this.input = [];
		for (let i = 0; i < this.height; i++) {
			this.input[i] = [];
			for (let j = 0; j < this.width; j++)
				this.input[i][j] = false;
		}
	}

	// > set Board()
	// DESC:	Generates the values of the tiles and stores them in board[][]
	setBoard():void {
	    this.board = [];									// define the board as an empty array
	    for (let i = 0; i < this.height; i++) {				// for each row
	        this.board[i] = [];								// initialize the row as an empty array
	        for (let j = 0; j < this.width; j++) {			// for each col of that row
	            this.board[i][j] = Math.random() >= 0.5;	// assign it a true or false value
	        }
	    }
	}

	// > setBoard()
	// DESC:	Sets the border values and stores them in vertical[][] and horizontal[][].
	// 			The border values are calculated by counting continuous true values on
	// 			the board for every given row/col on both axis.
	// 				ex. [F, F, T, T, T, F, T, F, T, T]  ===>  [3, 1, 2]
	setBorder():void {

	    // set horizontal
	    this.horizontal = [];
	    for (let row = 0; row < this.height; row++) {	// for each row
	        this.horizontal[row] = [];					// initialize horizontal[i]
			let count = 0;
	        for (let i = 0; i < this.width; i++) {		// for each element in that row
				if (this.board[row][i] == true) {		// if the value in that element is true
					count++;							// increment count
				} else if (count != 0) {				// if board[row][i] is false and count is not equal to 0:
					this.horizontal[row].push(count);	// push count onto the horizontal array
					count = 0;							// reset count to 0
				}
	        }
			if (count != 0)								// if there were numbers being counted at the end of the column:
				this.horizontal[row].push(count);		// push the remaining count onto the horizontal array
	    }

	    // set vertical
		this.vertical = [];
		for (let col = 0; col < this.width; col++) {	// for each column
			this.vertical[col] = [];					// initialize vertical[i]
			let count = 0;
			for (let i = 0; i < this.height; i++) {		// for each element in that column
				if (this.board[i][col] == true) {		// if the value in that element is true
					count++;							// increment count
				} else if (count != 0) {				// else if the count is not 0
					this.vertical[col].push(count);		// push count onto the vertical array
					count = 0;							// reset count to 0
				}
			}
			if (count != 0)								// if there were numbers being counted at the end of the column:
				this.vertical[col].push(count);			// push the remaining count onto the horizontal array
		}
	}

	// > set(row: target row, col: target column, val: value of guess)
	// DESC:	Given a target and a value: set() returns a value from setReturn depending on the state of the board
	// RETURN:	- # (OOB) if target is out of bounds
	//			- # (KNOW) if the target has alredy been guessed
	// 			- # (HIT) if the value of val matches the value at board[row][col]
	//			- # (MISS) if the value of val does not matche the value at board[row][col]
	set(row:number, col:number, val:boolean):setReturn {

		if (row < 0 || row >= this.height || col < 0 || col >= this.width)	// if the target is out of bounds
			return setReturn.OOB;											// return OOB

		if (this.input[row][col] == true)		// if the target has already been guessed
			return setReturn.KNOWN;				// return KNOWN
		else
			this.input[row][col] = true;		// else mark this target as guessed

		if (this.board[row][col] == val)		// if the target matches the value of the guess
			return setReturn.HIT;				// return HIT
		else
			return setReturn.MISS;				// else return MISS
	}

	// > print
	// DESC:	logs the values of the member variables in the console
	print() {
		console.log(this.input);
		console.log(this.board);
		console.log(this.horizontal);
		console.log(this.vertical);
	}
}

let game = new nonograms();
game.newGame(15);
