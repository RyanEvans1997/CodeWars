/*
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"

uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"

uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw.
*/

function uefaEuro2016(teams, scores){
    let winner;
    if(scores[0] > scores[1]) {
        winner = teams[0];
    } else if (scores[0] == scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    } else {
        winner = teams[1];
    }
    return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
}

console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]));

