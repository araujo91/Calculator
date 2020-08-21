
let gNr = [];
let gI = 0;
let gFlo = 0;
let gOpe = 0
const btn = document.getElementById('buttons');
const pOps = document.getElementById("ops");
const pRes = document.getElementById("res");
btn.addEventListener('click', function(e) {
    
    if (e.toElement.localName) {
        let x = e.toElement.innerHTML;
        let y = e.toElement.className;
        console.log(y) 
        if(y == "btn_equal" || gOpe == 2){
        console.log("equal")
            gNr[gI] = parseFloat(gNr[gI]);
            operate(gNr);

        }
        else if(y == "btn_nr"){ console.log("nr")
            if(gNr[gI] = "undefined"){gNr[gI] = 0}
            pOps.innerHTML += x;
            gNr[gI] += x;

        } else if(y == "btn_oper"){ console.log("oper")
            pOps.innerHTML += x;
            gNr[gI] = parseFloat(gNr[gI]);
            gI++;
            gNr[gI] = x;
            gI++;
            gFlo = 0;
           
            
        }  else if(y == "btn_dot") {
            console.log("entrow")
            if (gFlo == 0) {
                gNr[gI] += x;
                gFlo++;
                pOps.innerHTML += x;
            } else if(gFlo !== 0) {
                console.log("only 1 dot" );
            }
        } else if(y = "btn_ce") { console.log("ce")
            gNr = [];
            gI = 0;
            gFlo = 0;
            pOps.innerHTML = "";
            pRes.innerHTML = "0";

        } 
}})
      

function sum(array) {
    array[2] = array[0] + array[2];
    array.shift();
    array.shift();
    return array;
}
                
function sub(array) {
    array[2] = array[0] - array[2];
    array.shift();
    array.shift();
    return array;
}
                
function mul(array) {
    array[2] = array[0] * array[2];
    array.shift();
    array.shift();
    return array;
}
                
function div(array) {
    array[2] = array[0] / array[2];
    array.shift();
    array.shift();
    return array;
}
                
function operate(array) {
                
    switch (array[1]) {
        case '+':
            sum(array);
            pRes.innerHTML = array[0];
            break;
        case '-':
            sub(array);
            pRes.innerHTML = array[0];
            break;
        case '*':
            mul(array);
            pRes.innerHTML = array[0];
            break;
        case '/': 
            div(array);
            pRes.innerHTML = array[0];
            break;
        }
}               