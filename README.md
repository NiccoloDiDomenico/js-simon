Esercizio di oggi: **Simon Says**
nome repo: js-simon
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**:
Non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
Potete implementare il countdown con setTimeout, ma meglio se con setInterval per mostrare il tempo rimasto all'utente in pagina :occhiolino:
Non vi preoccupate per eventuali numeri ripetuti.
**BONUS:**
- Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
**LOGICA**
Al click sul bottone start game:
- nascondo gli input dalla pagina
- blocco il bottone start 
- genero i numeri random
- mostro i numeri random in pagina
- faccio partire il timer di 30 secondi
Allo scadere del timer:
- stop timer
- nascondo i cpuNumeber
- mostro gli input per l'utente
Al click sul bottone check:
- prelevo tutti i valori degli input
- dichiaro l'arrey di num indovinati
- per ogni valore degli input controllo se (è incluso nell'arrey di cpuNumber)
    - se (true) {
        - pusho i numeri inclusi nell'arrey finale di numeri indovinati
    }
Alla fine:
- Stampo il messaggio con il risultato.

