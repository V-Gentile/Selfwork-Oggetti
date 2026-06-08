let bowling = {
    players: [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    generaPunteggi: function() {
        this.players.forEach(giocatore => {
            giocatore.scores = []; 
            for (let i = 0; i < 10; i++) {
                let puntiRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                giocatore.scores.push(puntiRandom);
            }
        });
        console.log("Punteggi generati per tutti i giocatori in gara.");
    },

    calcolaTotali: function() {
        this.players.forEach(giocatore => {
            giocatore.totale = giocatore.scores.reduce((acc, punti) => acc + punti, 0);
        });
    },

    aggiungiGiocatore: function(nuovoNome) {
        let nuovoGiocatore = { name: nuovoNome, scores: [] };
        
        for (let i = 0; i < 10; i++) {
            let puntiRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            nuovoGiocatore.scores.push(puntiRandom);
        }
        
        this.players.push(nuovoGiocatore);
        console.log(`Il giocatore ${nuovoNome} è sceso in pista e ha tirato le sue 10 bocce!`);
    },

    trovaVincitore: function() {
        this.calcolaTotali();
        
        this.players.sort((a, b) => b.totale - a.totale);
        
        let vincitore = this.players[0];
        console.log(`🏆 Il VINCITORE ASSOLUTO è ${vincitore.name} con ben ${vincitore.totale} punti!`);
    },

    stilaClassifica: function() {
        this.calcolaTotali();
        
        this.players.sort((a, b) => b.totale - a.totale);
        
        console.log("CLASSIFICA FINALE");
        this.players.forEach((giocatore, indice) => {
            console.log(`${indice + 1}° Posto: ${giocatore.name} con ${giocatore.totale} punti (Tiri: [${giocatore.scores.join(", ")}])`);
        });
        console.log("-------------------------------");
    }
};

bowling.generaPunteggi();

bowling.aggiungiGiocatore("Valerio");

bowling.trovaVincitore();

bowling.stilaClassifica();
