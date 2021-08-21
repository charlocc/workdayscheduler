var saveBtn=document.querySelector(".saveBtn"); 
var nineAM = document.querySelector(".nine-AM");
var tenAM = document.querySelector(".ten-AM");
var elevenAM = document.querySelector(".eleven-AM");
var twelvePM = document.querySelector(".twelve-PM");
var onePM = document.querySelector(".one-PM");
var twoPM = document.querySelector(".two-PM");
var threePM = document.querySelector(".three-PM");
var fourPM = document.querySelector(".four-PM");
var fivePM = document.querySelector(".five-PM");



// Live updated date and time function displayed on page
function displayTime (){var currentTime = moment()
    $("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm a'));}
    setInterval(displayTime, 1000)

// Tracks the current time
var time = moment().format("H");
console.log(time);

// Local storage 
var nineInput = document.querySelector('[name="nineinput"]').value;

saveBtn.addEventListener("click",function(){
    if(nineInput !=null) {
        localStorage.setItem("nineTask", nineInput);
    }
    var storedNineInput = localStorage.getItem("nineTask");
    var nineInputp  = document.createElement('p');
    nineInputp.value= storedNineInput;
    nineAM.appendChild(nineInputp);
});

// Colorcoding

function nineColor(){
    if(time>9) {
        nineAM.style.backgroundColor="gray";
        nineAM.style.color="white";
    } else if (time=9) {
        nineAM.style.backgroundColor="rgb(148, 58, 58)";
        nineAM.style.color="white";
    } else {
        nineAM.style.backgroundColor="green";
        nineAM.style.color="white";
    }
}
nineColor();

function tenColor(){
    if(time>10) {
        tenAM.style.backgroundColor="gray";
        tenAM.style.color="white";
    } else if (time=9) {
        tenAM.style.backgroundColor="rgb(148, 58, 58)";
        tenAM.style.color="white";
    } else {
        tenAM.style.backgroundColor="green";
        tenAM.style.color="white";
    }
}
tenColor();

function elevenColor(){
    if(time>10) {
        elevenAM.style.backgroundColor="gray";
        elevenAM.style.color="white";
    } else if (time=9) {
        elevenAM.style.backgroundColor="rgb(148, 58, 58)";
        elevenAM.style.color="white";
    } else {
        elevenAM.style.backgroundColor="green";
        elevenAM.style.color="white";
    }
}
elevenColor();




