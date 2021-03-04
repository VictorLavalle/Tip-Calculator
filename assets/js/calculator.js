/* Variables */
let billed = document.querySelector("#billedAmount");
let tipPerc = document.querySelector("#tipPercentage");
let people = document.querySelector("#numberPeople");

const btnSwitch = document.querySelector('#switch');

let total = document.getElementById("total");
let tip = document.getElementById("tip")

var inputfocused = "";

/* Functions */
function calculate(e) {
    let TotalPerPerson = document.getElementById("TotalPerPerson");

    if(isHigherToTwo()){
        let  TextTotalPerPerson = "Total Per Person: ";
        let NumberTotalPer = "$"+(CalculatePerPerson(CalculateTotalResult(),people.value)).toFixed(2);

        let TextTipPerPerson ="Tip Per Person: ";
        let NumberTipPer = "$"+(CalculatePerPerson(CalculateTip(),people.value)).toFixed(2);
    
        if(!TotalPerPerson){
            CreateParagrahp("ContainerTotal",TextTotalPerPerson,"TotalPerPerson");
            CreateParagrahp("ContainerTotal",NumberTotalPer,"NumberTotalPerPerson");

            CreateParagrahp("ContainerTip",TextTipPerPerson,"TipPerPerson");  
            CreateParagrahp("ContainerTip",NumberTipPer,"NumberTipPerPerson"); 
        }
        if(TotalPerPerson){
            NumberTotalPerPerson.textContent = NumberTotalPer;
            NumberTipPerPerson.textContent = NumberTipPer; 
            
        }

    }else{
        if(TotalPerPerson){
            DeleteParagrahp("TotalPerPerson");
            DeleteParagrahp("NumberTotalPerPerson");
            DeleteParagrahp("TipPerPerson");
            DeleteParagrahp("NumberTipPerPerson");
        
        }
    }

    total.textContent = "$"+CalculateTotalResult();
    tip.textContent = "$"+CalculateTip();
}


//Toggle button for dark mode
btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

    //Save in localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

//Get the current mood
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


//Button calculate
calculateBtn.addEventListener("click", e => {
        calculate(e);
});

document.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        calculate(e);
    }

});


//Calculate Values
function CalculateTotalResult(){
    let result;
    result = Number(billed.value) + Number (CalculateTip());
    result = Number(result).toFixed(2);
    return result;
}

function CalculateTip(){
    let tipResult = Number(billed.value) * Number(tipPerc.value/100);
    tipResult = Number(tipResult).toFixed(2);
    return tipResult;
}

function CalculatePerPerson(ValueToCalculate, NumberPerson){
    let Result;
    Result =  Number(ValueToCalculate)/Number(NumberPerson);
    Result = Number(Result.toFixed(2));
    return Result;
}


function isHigherToTwo(){
    return Number(people.value)>1;
}


//Create Elements

function CreateParagrahp(idContainer,content,idElement){
    let Container = document.getElementById(idContainer);
    const fragment = document.createDocumentFragment();
    let Paragrahp = document.createElement("p");
    Paragrahp.textContent= content;
    Paragrahp.setAttribute("id",idElement);
    Paragrahp.setAttribute("class","results");
    fragment.appendChild(Paragrahp);
    Container.appendChild(Paragrahp);
}

function DeleteParagrahp(idElement){
    let Paragrahp = document.getElementById(idElement);
    Paragrahp.parentNode.removeChild(Paragrahp);
}


