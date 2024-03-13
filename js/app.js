// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

const bottone = document.querySelector('.btn');

bottone.addEventListener('click', function(){
    const grigliaGrid = document.querySelector('.griglia');
    const elementiRiga = 10;
    const numeroElementi = elementiRiga * elementiRiga;

    for(let i = 0; i < numeroElementi; i++){
        const numeri = i + 1;

        const elementoCella = document.createElement('div'); // creo l'elemento div per la cella
        elementoCella.className = 'cella';                   // dò al div la classe cella
        elementoCella.innerHTML = numeri;                    // inserisco in ogni cella un  umero
        grigliaGrid.append(elementoCella);                   // inserisco la cella nella griglia

        elementoCella.addEventListener('click', function(){
            elementoCella.classList.toggle('bg-blu');
            console.log(numeri);
        })
    }
})
// Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.