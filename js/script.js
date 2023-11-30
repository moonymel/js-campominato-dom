// CREO LA FUNZIONE PER GENERARE UN NUMERO CASUALE
function generateNumbers(array_bomb){
    let check = false;
    let randomInt;

    while(check == false){
        randomInt = Math.floor(Math.random() * 100 + 1);

        if(array_bomb.includes(randomInt) == false) {
            check = true;
        } 

        return randomInt;
    }
}

// CREO LA FUNZIONE PER GENERARE LE BOMBE

function generateBombs(num) {
    let bombs = [];
    
    for(let i=0; i<num; i++){
        // let single_bomb;
        // let check = false;

        // while(check == false) {
        //     single_bomb = Math.floor(Math.random() * 100 + 1);

        //     if(bombs.includes(single_bomb) == false) {
        //         check = true;
        //     }

        //     return single_bomb;
        // }

        bombs.push(generateNumbers(bombs));
    }

    console.log(bombs)
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
    
        grid.innerHTML = '';
    
        // AVVIO CICLO FOR PER IL NUMERO DI CASELLE
        for(let i=0; i<100; i++) { 
            
            // CHIAMO LA FUNZIONE PER LA CELLA
            let cell = createCell(i+1);
            
            // BONUS 
            cell.addEventListener('click', function(){
                this.classList.add('new-bg');
                console.log(`Questa è la cella numero ${i+1}`)
                
            })
            
            // AGGIUNGO LA CELLA NEL DOM
            grid.appendChild(cell);

            
        }
        

    })
}


startToPlay();

let numberofbombs = 16;
generateBombs(numberofbombs);
