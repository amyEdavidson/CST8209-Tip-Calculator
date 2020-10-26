
//remove warning for bill
document.getElementById("bill").addEventListener("blur", function(){
    if(this.value !== ""){
        billWarning.innerHTML = "";
    }
});

//remove warning amount of people
document.getElementById("split").addEventListener("blur", function(){
    if(this.value !== ""){
        splitWarning.innerHTML = "";
    }
});


// Add an event to the form on submit to validate input
document.TipCA.addEventListener("submit", validate);
