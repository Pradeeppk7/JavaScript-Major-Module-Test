let btnrule = document.getElementById("buttonrule");
let rulebox = document.getElementById("ruleb");
let exitrule = document.getElementById('exit');
console.log(rulebox);

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
