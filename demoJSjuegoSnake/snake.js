

//limites cantLine
//paso 
//direccion Up Down
//headSnake pos


const moveSnake = (event, headSnake, cLine, maxLine) => {

    // let headSnake = snake[0];
    let snakeMove = {
        line: 0,
        lineLi: 0,
        lineLs: 0,
        step: 0
    };

    switch (event.key) {
        // switch (event) {    
        case 'ArrowRight':
            snakeMove.line = Math.ceil(headSnake / cLine);
            snakeMove.lineLi = (snakeMove.line - 1) * cLine;
            snakeMove.lineLs = (snakeMove.lineLi + cLine) - 1;
            snakeMove.step = 1;

            break;
        case 'ArrowLeft':
            snakeMove.line = Math.ceil(headSnake / cLine);
            snakeMove.lineLi = (snakeMove.line - 1) * cLine;
            snakeMove.lineLs = (snakeMove.lineLi + cLine) - 1;
            snakeMove.step = (-1);

            break;
        case 'ArrowUp':
            snakeMove.line = Math.ceil(headSnake / cLine);
            snakeMove.lineLi = headSnake - ((snakeMove.line - 1) * cLine);
            snakeMove.lineLs = snakeMove.lineLi + (cLine * maxLine);
            snakeMove.step = (-cLine);

            break;
        case 'ArrowDown':
            snakeMove.line = Math.ceil(headSnake / cLine);
            snakeMove.lineLi = headSnake - ((snakeMove.line - 1) * cLine);
            snakeMove.lineLs = snakeMove.lineLi + (cLine * maxLine);
            snakeMove.step = cLine;

            break;

        default:
            break;
    }

    console.log(snakeMove);
    return snakeMove;

}

// moveSnake('ArrowRight',240, 17,14);
// moveSnake('ArrowLeft',240, 17,14);
// moveSnake('ArrowUp',240, 17,14);
// moveSnake('ArrowDown',240, 17,14);




