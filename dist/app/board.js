class Board {
    constructor(dimension) {
        this.dimension = dimension;
        this.numberOfCells = dimension * dimension;

        this.addCells();
        this.addClickListener();
    }

    // Add cells to the board.
    addCells() {
        let cells = '';
        const board = document.createElement('div');

        board.classList.add('board');
        board.setAttribute('style', `
        grid-template-columns: repeat(${this.dimension}, 1fr);
        grid-template-rows: repeat(${this.dimension}, 1fr);
        `);

        for (let i = 0; i < this.numberOfCells; i++)
            cells += `<div id="cell-${i}" class="cell"></div>`;

        board.innerHTML = cells;
        document.querySelector('.board-wrapper').appendChild(board);
    }

    // Add event listener (click) for every cell.
    addClickListener() {
        for (let i = 0; i < this.numberOfCells; i++)
            document.querySelector(`#cell-${i}`).addEventListener('click', this.insert);
    }

    // Insert 'x' or 'o' to the cell is clicked.
    insert() {
        this.innerHTML = 'x';
        console.log('merel');
    }

}

const board = new Board(3);
