//1.define the variables for each input then pull var by ID
//2.create the sum, then alert the user of the suggested tip
function tipCalculator(){
    var bill= parseInt(document.getElementById('bill').value);
    var experience=document.getElementById('experience').value;
    var split=document.getElementById('split').value;
    
    var sum = (bill*experience)/split;
    
    alert("Suggested tip amount (CAD $): " + sum);
 
};

function guessNum(){
var secret = 4;

do {
  var guess = prompt("Please choose a number from 1-5");

} while (secret != guess);
window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
};

//Array
var CAcities = ["Nanaimo", " Whitehorse", " Iqaluit", " Yellowknife", " Hamilton", " London"," Vancouver", " Regina", " Winnipeg", " Calgary", " Frederiction", " St. John's", " Halifax", " Ottawa", " Toronto", " Charlottetown", " Montreal", " Quebec City"];
document.getElementById("CAlist").innerHTML = CAcities;
