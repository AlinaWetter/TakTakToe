let fields = []

let currentShape = 'cross'
let gameover

function fillShape(id) {
    if (!fields[id] && !gameover) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.add('player-inactive')
            document.getElementById('player2').classList.remove('player-inactive')
        } else {
            currentShape = 'cross';
            document.getElementById('player2').classList.add('player-inactive')
            document.getElementById('player1').classList.remove('player-inactive')
        }

        fields[id] = currentShape
        draw();
        checkForWin();
    }
}

function draw() {
    for (i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none')
        }
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none')
        }
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line2').style.transform = 'scaleX(1)'
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').style.transform = 'scaleX(1)'
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line3').style.transform = 'scaleX(1)'
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleY(1)'
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleY(1)'
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleY(1)'
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)'
    }
    if (fields[6] == fields[4] && fields[4] == fields[2] && fields[6]) {
        winner = fields[6];
        document.getElementById('line8').style.transform = 'rotate(135deg) scaleX(1)'
    }

    if (winner) {
        console.log('gewonnen:' + winner)
        gameover = true;

        setTimeout(function() {
            document.getElementById('gameOver').classList.remove('d-none')
            document.getElementById('gameOverButton').classList.remove('d-none')
        }, 500);
        
    }

}

function restart() {
    window.location.reload();
}
