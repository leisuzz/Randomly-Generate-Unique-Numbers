/*
    Clike Generate button and ouput will show on the page
*/

let btn = document.querySelector('button');       // Set button
let output = document.querySelector('h1');        // Set ouput


/* Swape index array[i] and array[j] randomly
    j is an index number that been randomly chosen from 0 to i
*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function getRandomNumber(){
    var result = [];

    for (let k=1; k<=10000; k++) {                 // Get  numbers 1 to 10000
        compare1 = Math.random();  
        compare2 = Math.random();
            
        if (compare1>compare2){                 // Compare two random numbers
            result.push(k);         
        } else{
            result.unshift(k);                  // Push and unshift will random shuffle numbers
        }
    }
    return shuffle(result);                     // This shuffle can remove the situation like 10000 is either first or last in the matrix
}

btn.addEventListener('click', () =>{ 
    output.innerText = getRandomNumber();       // Press the button to see result
})

console.log(getRandomNumber())                  // Result also shows in console