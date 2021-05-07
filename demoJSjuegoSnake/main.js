

console.log('Start');

let container = document.getElementById('container');
let body = document.getElementsByTagName('body')[0];

// console.log(container);

// console.log(container.children[0].style);

// container.children[0].style.backgroundColor='#000';
container.children[240].classList.add('food');
container.children[0].classList.add('bodySnake');
container.children[1].classList.add('headSnake');
container.children[3].classList.toggle('headSnake');
console.log(container.children[3].classList);
container.children[3].classList.toggle('headSnake');
console.log(container.children[3].classList);


let snake = [1, 0];//snake[0] headSnake



//logica para el movimiento de snake
let interv;
let eventOld;
let snakeMove;
let timeInterval = 500;


// console.log(snake.unshift(99));
// console.log(snake);
// console.log(snake.pop());
// console.log(snake);

const moveLine = (sMove) => {
    console.log('sMove ' + JSON.stringify(sMove));
    let headSnake = snake[0];
    //cambio head
    let newHeadSnake = headSnake + sMove.step;
    // console.log(newHeadSnake);
    if (newHeadSnake >= sMove.lineLi && newHeadSnake <= sMove.lineLs) {
        // console.log('newHeadSnake');
        
        snake.unshift(newHeadSnake);
        console.log(snake);

        for (let index = 0; index < snake.length; index++) {

            if (index === 0) {
                if (!container.children[snake[index]].classList.contains('headSnake'))
                    container.children[snake[index]].classList.toggle('headSnake');//activa
            }
            else {
                if (container.children[snake[index]].classList.contains('headSnake'))
                    container.children[snake[index]].classList.toggle('headSnake');//desactiva

                if (!container.children[snake[index]].classList.contains('bodySnake'))
                    container.children[snake[index]].classList.toggle('bodySnake');//activa
            }
        }

        let tailSnake = snake.pop();
        if (container.children[tailSnake].classList.contains('bodySnake'))
            container.children[tailSnake].classList.toggle('bodySnake');//desactiva


    } else {
        console.log('end line');
        clearInterval(interv);
    }
}


body.addEventListener('keyup', (event) => {
    console.log('input keyup');
    console.log(event.key);
    console.log(eventOld);
    if ((event.key === 'ArrowUp' && eventOld !== 'ArrowDown') || (event.key === 'ArrowDown' && eventOld !== 'ArrowUp')) {
        console.log('if1');
        eventOld = event.key;
        clearInterval(interv);
        snakeMove = moveSnake(event, snake[0], 17, 14);
        console.log(snakeMove);
        // moveLine(snakeMove);
        interv = setInterval(moveLine, timeInterval, snakeMove);

    }
    if ((event.key === 'ArrowRight' && eventOld !== 'ArrowLeft') || (event.key === 'ArrowLeft' && eventOld !== 'ArrowRight')) {
        console.log('if2');
        eventOld = event.key;
        clearInterval(interv);
        snakeMove = moveSnake(event, snake[0], 17, 14);
        // moveLine(snakeMove);
        interv = setInterval(moveLine, timeInterval, snakeMove);
        // interv = setInterval(function () {
        //     console.log('key ' + event.key);
        // }, 3500);

    }




});


