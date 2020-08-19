function sum(a, b) {
    return a+ b;
}

function sub(a, b) {
    return a+ b;
}

function mul(a, b) {
    return a+ b;
}

function div(a, b) {
    return a+ b;
}

function operate(a, b, c) {
    switch (c) {
        case '+':
            console.log(sum(a, b));
            break;
        case '-':
            console.log(sub(a, b));
            break;
        case '*':
            console.log(mul(a, b));
            break;
        case '/': 
        console.log(div(a, b));
            break;
    }
}

const btn = document.getElementById('buttons');
                btn.addEventListener('click', function(e) {
                
                let x = console.log(e);})
                //let y = console.log(e.originalTarget.className);})
                //let y = console.log