//considering the kicks as 0 and 1
//1 if goal else 0
let score = [0, 1]
var turn;
var kicks = 0;
//team1 details
var team1 = {
    name: "Tottenham",
    kicks: [],
    score: 0
}


//team2 details
var team2 = {
    name: "Atletico",
    kicks: [],
    score: 0
}

window.onload = () => {
    //decide who's going to kick first
    selectTunrnToKick();
    //Update the button text
    updateButtonText();
    //update the initial score
    updateScore();
    //update team names
    updateTeamNames();
}

//randomly choosing a team to kick first
let selectTunrnToKick = () => {
    turn = Math.round(Math.random()) + 1;
}


let updateButtonText = () => {
    var button = document.getElementById("button");
    var result = document.getElementById("result");
    result.style.visibility = "";
    //check if the game is over or not
    if (team1.kicks.length == 5 && team2.kicks.length == 5) {
        button.remove();
        //check if match is draw
        result.textContent = team1.score == team2.score ? 'Match draw' : `${team1.score>team2.score? team1.name : team2.name} Wins`
    } else {
        turn = team1.kicks.length === 5 ? 2 : team2.kicks.length === 5 ? 1 : turn
    }
    button.textContent = `${turn ===1 ? team1.name : team2.name } Turn`
}

//for updation of score in score board
let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score
    document.getElementById("team-2-score").textContent = team2.score
    updateKicks()
}


//for updating the names of team initially
let updateTeamNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}


//for kicking each time when it's their team turn
var buttonClick = () => {
    var kicks = score[Math.floor(Math.random() * score.length)];

    if (turn === 1) {
        team1.kicks.push(kicks)
        team1.score = calculateScore(team1.kicks)
        turn = 0
    } else {
        team2.kicks.push(kicks)
        team2.score = calculateScore(team2.kicks)
        turn = 1
    }
    updateButtonText()
    updateScore()
}

//for calculation of score
var calculateScore = (kicks) => {
    return kicks.map(num => {
        return num
    }).reduce((totla, num) => totla + num)
}

//updating the kicks
var updateKicks = () => {
    var teamOne = document.getElementById("team-1-round-score").children
    var teamTwo = document.getElementById("team-2-round-score").children

    team1.kicks.forEach((kicks, index) => {
        if (kicks == 0)
            teamOne[index].style.backgroundColor = "rgb(177, 8, 8)"
        else
            teamOne[index].style.backgroundColor = "rgb(2, 77, 25)"
    })


    team2.kicks.forEach((kicks, index) => {
        if (kicks == 0)
            teamTwo[index].style.backgroundColor = "rgb(177, 8, 8)"
        else
            teamTwo[index].style.backgroundColor = "rgb(2, 77, 25)"
    })
}