let agenda = {
    contatti: [
        { nome: "Marco", telefono: "3331234567" },
        { nome: "Giulia", telefono: "3289876543" },
        { nome: "Antonio", telefono: "3401122334" }
    ],

    mostraTutti: function() {
        console.log("LISTA CONTATTI");
        this.contatti.forEach(contatto => {
            console.log(`${contatto.nome}: ${contatto.telefono}`);
        });
        console.log("----------------------");
    },

    mostraContatto: function(nomeCercato) {
        let trovato = this.contatti.find(contatto => contatto.nome.toLowerCase() === nomeCercato.toLowerCase());
        
        if (trovato) {
            console.log(`Trovato: ${trovato.nome} - ${trovato.telefono}`);
        } else {
            console.log(`Errore: Il contatto ${nomeCercato} non esiste.`);
        }
    },

    aggiungiContatto: function(nuovoNome, nuovoTelefono) {
        this.contatti.push({ nome: nuovoNome, telefono: nuovoTelefono });
        console.log(`Il contatto ${nuovoNome} è stato aggiunto con successo!`);
    },

    eliminaContatto: function(nomeDaEliminare) {
        let contattiIniziali = this.contatti.length;
        this.contatti = this.contatti.filter(contatto => contatto.nome.toLowerCase() !== nomeDaEliminare.toLowerCase());

        if (this.contatti.length < contattiIniziali) {
            console.log(`Il contatto ${nomeDaEliminare} è stato eliminato.`);
        } else {
            console.log(`Errore: Impossibile eliminare ${nomeDaEliminare}, non trovato.`);
        }
    },

    modificaContatto: function(nomeDaModificare, nuovoTelefono) {
        let daModificare = this.contatti.find(contatto => contatto.nome.toLowerCase() === nomeDaModificare.toLowerCase());
        
        if (daModificare) {
            daModificare.telefono = nuovoTelefono;
            console.log(`Il numero di ${nomeDaModificare} è stato aggiornato a ${nuovoTelefono}.`);
        } else {
            console.log(`Errore: Impossibile modificare ${nomeDaModificare}, non trovato.`);
        }
    }
};

agenda.mostraTutti();

agenda.mostraContatto("giulia");

agenda.aggiungiContatto("Silvia", "3990000000");

agenda.eliminaContatto("Marco");

agenda.modificaContatto("Antonio", "3339999999");

agenda.mostraTutti();
