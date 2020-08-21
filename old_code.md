// let gNr = [];
// let gI = 0;
// let gFlo = 0;

// const btn = document.getElementById('buttons');
// const pOps = document.getElementById("ops");
// const pRes = document.getElementById("res");
// btn.addEventListener('click', function(e) {
//     let x = e.toElement.innerHTML;
//     let y = e.toElement.className;
//     if(gNr[gI] = "undefined"){gNr[gI] = 0}
//     if(x == ".") {        
//         console.log("ponto introduzido")
//         flo(x)
//     } else if (y == "btn oper") {
//         pOps.innerHTML += x;
//         console.log("operador introduzido")
//         oper(x)
//         }
//     else if(x == "="){
//         console.log("resolv")
//         gNr[gI] = parseFloat(gNr[gI]);
//         operate(gNr);
//     } else if(y == "btn_nr"){
        
//         nr(x)
        
//     // } else {
//     //     gNr[gI] = parseFloat(gNr[gI]);
//     //     gFlo--;
//     //     gI++;
//     //     gNr[gI] = x;
//     //     gI++
//     //     }
// }})
       

// function sum(array) {
//     array[2] = array[0] + array[2];
//     array.shift();
//     array.shift();
//     return array;
// }
                
// function sub(array) {
//     array[2] = array[0] - array[2];
//     array.shift();
//     array.shift();
//     return array;
// }
                
// function mul(array) {
//     array[2] = array[0] * array[2];
//     array.shift();
//     array.shift();
//     return array;
// }
                
// function div(array) {
//     array[2] = array[0] / array[2];
//     array.shift();
//     array.shift();
//     return array;
// }
                
// function operate(array) {
                
//     switch (array[1]) {
//         case '+':
//             sum(array);
//             pRes.innerHTML = array[0];
//             break;
//         case '-':
//             sub(array);
//             pRes.innerHTML = array[0];
//             break;
//         case '*':
//             mul(array);
//             pRes.innerHTML = array[0];
//             break;
//         case '/': 
//             div(array);
//             pRes.innerHTML = array[0];
//             break;
//         }
// }               

// function flo(x) {
//     if (gFlo == 0) {
//         console.log("estou a meter")
//         gNr[gI] += x;
//         gFlo++;
//         pOps.innerHTML += x;
//     } else if(gFlo !== 0) {
//         console.log("only 1 dot" );
        
//     }
// }

// function oper(x) {
//     gNr[gI] = parseFloat(gNr[gI]);
//         gFlo--;
//         gI++;
//         gNr[gI] = x;
//         gI++
// }

// function nr(x){
    
//     pOps.innerHTML += x;
//     gNr[gI] += x;
// }




// if(x == "=" || gI == 4){
//     console.log(gNr)
//     gNr[gI] = parseFloat(gNr[gI]);
//     operate(gNr);
// } else if(y == "btn_nr"){
//     if(gNr[gI] = "undefined"){gNr[gI] = 0}
//     gNr[gI] += x;
// } else {
//     gNr[gI] = parseFloat(gNr[gI]);
//     gI++;
//     gNr[gI] = x;
//     gI++
//     }
// })