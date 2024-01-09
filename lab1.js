const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Akanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ]            
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 1.33,
            x: 3.25,
            team2: 6.5,
        }
    }

const [playersl, players2] = game.players;
console.log(playersl, players2);


const [gk, ...fieldPlayers] = playersl;
console.log[gk, fieldPlayers];


const allPlayers = [...playersl,...players2];
console.log[ allPlayers];

const playersFinal = [...playersl, 'Thiago', 'Coutinho', 'periscirc'];

const {odds: {team1, x: draw, team2}} = game;
console.log (team1, draw, team2);

const printGoals = function(...players){
    console.log (`${players.length} goals were scored`);
}

printGoals ('Davies','muller','Lewandowski','Kimmich');
printGoals ('Davies', 'Muller');
printGoals (...game.scored);

team1 < team2 && console.log('Tema1 is more likey to win');
team1 > team2 && console.log('Tema1 is more likey to win');
