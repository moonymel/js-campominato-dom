// CREO LA FUNZIONE PER GENERARE ARRAY DI NUMERI CASUALI

function generateNumbers(array_bomb){
    let check = false;
    let randomInt;

    while(check == false){
        randomInt = Math.floor(Math.random() * 100 + 1);

        if(array_bomb.includes(randomInt) == false) {
            check = true;
        } 

    }

    return randomInt;
}

// CREO LA FUNZIONE PER GENERARE LE BOMBE

function generateBombs(num) {
    let bombs = [];
    
    for(let i=0; i<num; i++){

        bombs.push(generateNumbers(bombs));
    }

    return bombs;
}


// CREO LA FUNZIONE PER LA CELLA

function createCell(num) {
    let element = document.createElement('div');
    element.classList.add('cell');

    element.innerText = num;

    return element;
}

// CREO LA FUNZIONE PER INIZIARE IL GIOCO

function startToPlay (){ 
    // VARIABILE DEL CONTENUTO DELLA GRIGLIA
    let grid = document.getElementById('grid');
    
    // VARIABILE DEL BOTTONE
    let button = document.querySelector('.btn');

    // CREO EVENTO PER IL CLICK SUL BOTTONE   
    button.addEventListener('click', function(){
        
        const numberofbombs = 16;
        
        grid.innerHTML = '';
        const bombs = generateBombs(numberofbombs);
        console.log(bombs);

        let points = 0;
        
        // AVVIO CICLO FOR PER IL NUMERO DI CASELLE
        for(let i=0; i<100; i++) { 
            
            // CHIAMO LA FUNZIONE PER LA CELLA
            let cell = createCell(i+1);
            
          
            cell.addEventListener('click', function(){
                if(bombs.includes(i) == false) {
                    this.classList.add('notabomb');
                    points++;
                    document.getElementById('points').innerText = `Il tuo punteggio è di ${points}`;
                }
                else {
                    this.classList.add('isabomb')
                }
            })
            
            // AGGIUNGO LA CELLA NEL DOM
            grid.appendChild(cell);

            
        }
        

    })
}


startToPlay();
