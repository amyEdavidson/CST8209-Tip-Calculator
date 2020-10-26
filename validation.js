function validate(e){
    // prevent default is used to stop the alerts from being displayed immediately
    e.preventDefault();
    
    var valid=true;
    
    //alert for null bill field
    if(TipCA.bill.value === ""){
        document.getElementById('billWarning').innerHTML="*Please enter your bill*";
        valid = false;
    }
           
    //alert for null tip field
    if(TipCA.split.value === ""){
        document.getElementById('splitWarning').innerHTML="*Please enter how many people are paying the bill*";
        valid = false;
    }

    //alert for null experience field
    if(TipCA.experience.options.selectedIndex === 0){
        valid = false;
        document.getElementById("experienceWarning").innerHTML="*Select a service level*";
    }

    return valid;
        
};

//define the variables for each section
function tipCalculator(){
    var bill= document.getElementById('bill').value;
    var experience=document.getElementById('experience').value;
    var split=document.getElementById('split').value;
    
    var sum = int((bill*experience)/split);
    
    alert("Suggested tip amount: " + sum);
 
};


$(document).ready(function( ) {
    $("#myBtn").on("click", function(){
        $("h1").addClass("change");
    }
    )});

tipCalculator();

