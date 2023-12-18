class Comp {
    constructor(table, marker){
        this.marker = marker 
        this.enemyMarker = !marker 
        this.table = table;
        // this.table = [
        //     [0, 0, 0],
        //     [0, 0, 0],
        //     [this.marker, 0, 0],
        // ]
        this.winningCombs = [];
        // this.marker = marker 
        // this.enemyMarker = marker === "X" ? "O" : "X"
    }

    display(){
        for (let i = 0; i<3; i++){
            console.log(this.table[i])
        }
    }

    userMove(x,y) {
        this.table[x][y] = this.enemyMarker;
    }
    

    computerMove(x,y){
        this.table[x][y] = this.marker
    }

    check(marker, table = this.table, ) {
        // console.log("Test Table", table)
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (
                table[i][0] === marker &&
                table[i][1] === marker &&
                table[i][2] === marker
            ) {
                // console.log(`${marker ? 'Player' : 'AI'} wins!`);
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (
                table[0][i] === marker &&
                table[1][i] === marker &&
                table[2][i] === marker
            ) {
                // console.log(`${marker ? 'Player' : 'AI'} wins!`);
                return true;
            }
        }

        // Check diagonals
        if (
            (table[0][0] === marker &&
                table[1][1] === marker &&
                table[2][2] === marker) ||
            (table[0][2] === marker &&
                table[1][1] === marker &&
                table[2][0] === marker)
        ) {
            // console.log(`${marker ? 'Player' : 'AI'} wins!`);
            return true;
        }

        return false;
    }
    getTable(){
        return JSON.parse(JSON.stringify(this.table));
    }
    checkMe(table = this.table) {
        return this.check(this.marker, table);
    }

    checkEnemy() {
        return this.check(this.enemyMarker);
    }
    getEmptyValues(table = this.table){
        const empty = [];
        for (let i = 0; i<3; i++){
            for (let j = 0; j<3; j++){
                if (table[i][j] === 0){
                    empty.push([i,j])
                } 
            }
        }
        return empty
        // console.log(this.empty)
    }
    makeMove(){
        const empty = this.getEmptyValues()
        if (empty.length !== 0){
            var test = this.getTable()
            this.selectMove(test, 1)
            if (this.winningCombs.length > 0){
                const move = this.selectShortestArray(this.winningCombs)
                // console.log("mOve", move)
                this.computerMove(move[0], move[1])
            }
            else{
                const random = empty[Math.floor(Math.random() * empty.length)];
                this.computerMove(random[0], random[1])
            }
        }
        // console.log("Cell", [this.empty[0][0], this.empty[0][1]])
    }
    selectMove(table, counter, prevMoves = []) {
        const empty = this.getEmptyValues(table)
        if (counter < 4) {
            for (let i = 0; i < empty.length; i++) {
                const newTable = JSON.parse(JSON.stringify(table));
                newTable[empty[i][0]][empty[i][1]] = this.marker;
                const newMoves = [...prevMoves, empty[i]];
                if (this.checkMe(newTable)) {
                    // console.log(newMoves);
                    this.winningCombs.push(newMoves);
                } 
                else {
                    this.selectMove(newTable, counter + 1, newMoves);
                }
            }
        }
    }
    selectShortestArray(arrays) {
        const shortestArrays = arrays.filter(arr => arr.length === Math.min(...arrays.map(a => a.length)));
        const randomIndex = Math.floor(Math.random() * shortestArrays.length);
        const randomIndex2 = Math.floor(Math.random() * shortestArrays[randomIndex].length);
        return shortestArrays[randomIndex][randomIndex2];
    }
    
}

export default Comp;