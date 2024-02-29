class Comp {
    constructor(table, marker){
        this.marker = marker 
        this.enemyMarker = marker === true ? false : true
        this.table = table;
        this.winningCombs = [];
        this.playerWinningCombs = [];
    }

    display(){
        for (let i = 0; i<3; i++){
            console.log(this.table[i])
        }
    }

    playerMove(x,y) {
        this.table[x][y] = this.enemyMarker;
    }
    

    computerMove(x,y){
        this.table[x][y] = this.marker
    }

    check(marker, table = this.table, ) {
        for (let i = 0; i < 3; i++) {
            if (
                table[i][0] === marker &&
                table[i][1] === marker &&
                table[i][2] === marker
            ) {
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                table[0][i] === marker &&
                table[1][i] === marker &&
                table[2][i] === marker
            ) {
                return true;
            }
        }

        if (
            (table[0][0] === marker &&
                table[1][1] === marker &&
                table[2][2] === marker) ||
            (table[0][2] === marker &&
                table[1][1] === marker &&
                table[2][0] === marker)
        ) {
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

    checkPlayer(table = this.table) {
        return this.check(this.enemyMarker, table);
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
    }
    makeMove(){
        const empty = this.getEmptyValues()
        if (empty.length !== 0){
            var test = this.getTable()
            this.predictPlayerWin(test)
            this.selectMove(test, 1)
            const noImmediateWin = !this.winningCombs.some(comb => comb.length === 1);
            console.log(noImmediateWin)
            if (this.playerWinningCombs.length > 0 && noImmediateWin){
                const randomIndex = Math.floor(Math.random() * this.playerWinningCombs.length);
                const randomComb = this.playerWinningCombs[randomIndex][0];
                this.computerMove(randomComb[0], randomComb[1])
            } else {
                if (this.winningCombs.length > 0){
                    const move = this.selectShortestArray(this.winningCombs)
                    this.computerMove(move[0], move[1])
                }
                else{
                    const random = empty[Math.floor(Math.random() * empty.length)];
                    this.computerMove(random[0], random[1])
                }
            }
        }
    }
    selectMove(table, counter, prevMoves = []) {
        const empty = this.getEmptyValues(table)
        if (counter < 4) {
            for (let i = 0; i < empty.length; i++) {
                const newTable = JSON.parse(JSON.stringify(table));
                newTable[empty[i][0]][empty[i][1]] = this.marker;
                const newMoves = [...prevMoves, empty[i]];
                if (this.checkMe(newTable)) {
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
    predictPlayerWin(table, prevMoves = []){
        const empty = this.getEmptyValues(table)
        for (let i = 0; i < empty.length; i++) {
            const newTable = JSON.parse(JSON.stringify(table));
            newTable[empty[i][0]][empty[i][1]] = this.enemyMarker;
            const newMoves = [...prevMoves, empty[i]];
            if (this.checkPlayer(newTable)) {
                this.playerWinningCombs.push(newMoves);
            } 
        }
    }
    
}

export default Comp;