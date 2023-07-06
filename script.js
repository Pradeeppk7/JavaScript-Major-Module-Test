
let uspicked = 0;
let pcpicked = 0;
//stone =>0
//scissor =>1
//paper =>2
let btnrule = document.getElementById("buttonrule");
let rulebox = document.getElementById("ruleb");
let exitrule = document.getElementById('exit');
let stoneus = document.getElementById('stone');
let scissorus = document.getElementById('scissor');
let paperus = document.getElementById('paper');
let options = document.getElementById('options');
let result=document.getElementById('result');

stoneus.addEventListener('click', () => {
    stonepicked();
    componentonclick();
})

scissorus.addEventListener('click', () => {
    scissorpicked();
    componentonclick();
})

paperus.addEventListener('click', () => {
    paperpicked();
    componentonclick();
})

function componentonclick() {
    options.style.display = "none";
    result.style.display = "flex";
}



function RuleFunction() {
    if (rulebox.style.display === "none") {
        rulebox.style.display = "flex";
    }
    else {
        rulebox.style.display = "none";
    }
}

exitrule.addEventListener('click', () => {
    rulebox.style.display = "none";
})

function stonepicked() {
    console.log("stone");
    pcpicked = randompicker();
    if (pcpicked === 0) {
        console.log("Tie");
    }
    else if (pcpicked===1) {
        console.log("user wins");
    }
    else {
        console.log("pc wins");
    }
}
function scissorpicked() {
    console.log("scissor");
    pcpicked = randompicker();
    if (pcpicked === 0) {
        console.log("pc wins");
    }
    else if (pcpicked===1) {
        console.log("tie");
    }
    else {
        console.log("user wins");
    }
}
function paperpicked() {
    console.log("paper");
    pcpicked = randompicker();
    if (pcpicked === 0) {
        console.log("user wins");
    }
    else if (pcpicked===1) {
        console.log("pc wins");
    }
    else {
        console.log("tie");
    }
}

function randompicker() {
    let ai = Math.floor(Math.random() * 3);
    if (ai === 1) {
        console.log("pc:scissor");
    }
    else if (ai === 0) {
        console.log("pc:stone");
    }
    else {
        console.log("pc:paper");
    }
    return ai;
}

