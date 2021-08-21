var nineAM = document.querySelector("#nine-AM");
var tenAM = document.querySelector("#ten-AM");
var elevenAM = document.querySelector("#eleven-AM");
var twelvePM = document.querySelector("#twelve-PM");
var onePM = document.querySelector("#one-PM");
var twoPM = document.querySelector("#two-PM");
var threePM = document.querySelector("#three-PM");
var fourPM = document.querySelector("#four-PM");
var fivePM = document.querySelector("#five-PM");

// Local storage
$(".saveBtn").on("click", function () {
    // Get the value of the typed text in each text area element
    var taskInput = $(this).siblings(".tasks").val();
    // Get the id of the parent (the time ID assigned to each parent)
    var hour = $(this).parent().attr("id");
    // Store each item as a key value pair
    localStorage.setItem(hour, taskInput);

});
// Set the value of the text area to the stored value of text from the hour
$("#nine-AM .tasks").val(localStorage.getItem("nine-AM"));
$("#ten-AM .tasks").val(localStorage.getItem("ten-AM"));
$("#eleven-AM .tasks").val(localStorage.getItem("eleven-AM"));
$("#twelve-PM .tasks").val(localStorage.getItem("twelve-PM"));
$("#one-PM .tasks").val(localStorage.getItem("one-PM"));
$("#two-PM .tasks").val(localStorage.getItem("two-PM"));
$("#three-PM .tasks").val(localStorage.getItem("three-PM"));


// Colorcoding based on the hour

// Live updated date and time function displayed on page
function displayTime (){var currentTime = moment()
    $("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm a'));}
    setInterval(displayTime, 1000)
// Tracks the current time
var time = moment().format("H");
console.log(time);
// Functions to compare live time to the timeblocks
function nineColor(){
    if(time>9) {
        nineAM.style.backgroundColor="gray";
        nineAM.style.color="white";
    } else if (time==9) {
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
    } else if (time==10) {
        tenAM.style.backgroundColor="rgb(148, 58, 58)";
        tenAM.style.color="white";
    } else {
        tenAM.style.backgroundColor="green";
        tenAM.style.color="white";
    }
}
tenColor();

function elevenColor(){
    if(time>11) {
        elevenAM.style.backgroundColor="gray";
        elevenAM.style.color="white";
    } else if (time==11) {
        elevenAM.style.backgroundColor="rgb(148, 58, 58)";
        elevenAM.style.color="white";
    } else {
        elevenAM.style.backgroundColor="green";
        elevenAM.style.color="white";
    }
}
elevenColor();

function twelveColor(){
    if(time>12) {
        twelvePM.style.backgroundColor="gray";
        twelvePM.style.color="white";
    } else if (time==12) {
        twelvePM.style.backgroundColor="rgb(148, 58, 58)";
        twelvePM.style.color="white";
    } else {
        twelvePM.style.backgroundColor="green";
        twelvePM.style.color="white";
    }
}
twelveColor();

function oneColor(){
    if(time>13) {
        onePM.style.backgroundColor="gray";
        onePM.style.color="white";
    } else if (time==13) {
        onePM.style.backgroundColor="rgb(148, 58, 58)";
        onePM.style.color="white";
    } else {
        onePM.style.backgroundColor="green";
        onePM.style.color="white";
    }
}
oneColor();

function twoColor(){
    if(time>14) {
        twoPM.style.backgroundColor="gray";
        twoPM.style.color="white";
    } else if (time==14) {
        twoPM.style.backgroundColor="rgb(148, 58, 58)";
        twoPM.style.color="white";
    } else {
        twoPM.style.backgroundColor="green";
        twoPM.style.color="white";
    }
}
twoColor();

function threeColor(){
    if(time>15) {
        threePM.style.backgroundColor="gray";
        threePM.style.color="white";
    } else if (time==15) {
        threePM.style.backgroundColor="rgb(148, 58, 58)";
        threePM.style.color="white";
    } else {
        threePM.style.backgroundColor="green";
        threePM.style.color="white";
    }
}
threeColor();

function fourColor(){
    if(time>16) {
        fourPM.style.backgroundColor="gray";
        fourPM.style.color="white";
    } else if (time==16) {
        fourPM.style.backgroundColor="rgb(148, 58, 58)";
        fourPM.style.color="white";
    } else {
        fourPM.style.backgroundColor="green";
        fourPM.style.color="white";
    }
}
fourColor();

function fiveColor(){
    if(time>17) {
        fivePM.style.backgroundColor="gray";
        fivePM.style.color="white";
    } else if (time==17) {
        fivePM.style.backgroundColor="rgb(148, 58, 58)";
        fivePM.style.color="white";
    } else {
        fivePM.style.backgroundColor="green";
        fivePM.style.color="white";
    }
}
fiveColor();