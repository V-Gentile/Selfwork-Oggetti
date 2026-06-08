let persona = {
    nome: "Vincenzo",
    cognome: "Gentile",
    eta: 28,
    presentati: function() {
        console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`);
    }
};

persona.presentati();
