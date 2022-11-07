const team = {
    
    _players: [
          {firstName: 'Šaban',  lastName: 'Hodzić',    age: 33},
          {firstName: 'Amir',   lastName: 'Alić',      age: 21},
          {firstName: 'Moamer', lastName: 'Habibović', age: 35},
    ],

    _games: [
          {opponent: 'Kalesija', teamPoints: 16, opponentPoints: 18},
          {opponent: 'Vukovije', teamPoints: 24, opponentPoints: 35},
          {opponent: 'Masle',    teamPoints: 42, opponentPoints: 13},
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },
 
    addPlayer (newFirstName, newLastName, newAge){
        let player = {
            firstName: newLastName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },

    addGame (newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    },
};

team.addPlayer('Salih', 'Filipović', 45);
console.log(team.players);

team.addGame('Vukovi', 24, 35);
console.log(team.games);
