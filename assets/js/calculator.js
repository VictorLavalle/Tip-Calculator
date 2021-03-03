/* Variables */
billed = document.querySelector("#billedAmount");
tipPerc = document.querySelector("#tipPercentage");
people = document.querySelector("#numberPeople");

const btnSwitch = document.querySelector('#switch');


/* Functions */
function calculate(e) {
    let result;
    let tipResult;
    
    total.classList.add("animate");
    tip.classList.add("animate");

    result = Number(billed.value) + Number(billed.value) * Number(tipPerc.value);
    result = Number(result).toFixed(2);
    total.innerHTML = `$${result}`;

    tipResult = Number(billed.value) * Number(tipPerc.value);
    tipResult = Number(tipResult).toFixed(2);
    tip.innerHTML = `$${tipResult}`;

    setTimeout(e => {
        total.classList.remove("animate");
        tip.classList.remove("animate");
    }, 1100);
  
}


btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});


/* index */
calculateBtn.addEventListener("click", e => {
    calculate(e);
});

document.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        calculate(e);
    }

});