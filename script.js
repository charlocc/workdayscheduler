var nineAM = document.querySelector("#nine-AM");
var tenAM = document.querySelector("#ten-AM");
var elevenAM = document.querySelector("#eleven-AM");
var twelvePM = document.querySelector("#twelve-PM");
// var onePM = document.querySelector(".one-PM");
// var twoPM = document.querySelector(".two-PM");
// var threePM = document.querySelector(".three-PM");
// var fourPM = document.querySelector(".four-PM");
// var fivePM = document.querySelector(".five-PM");



// Live updated date and time function displayed on page
function displayTime (){var currentTime = moment()
    $("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm a'));}
    setInterval(displayTime, 1000)

// Tracks the current time
var time = moment().format("H");
console.log(time);

// Local storage
$(".saveBtn").on("click", function () {
    var taskInput = $(this).siblings(".tasks").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, taskInput);

});

// Set the value of the text area to the stored value of text from the hour
$("#nine-AM .tasks").val(localStorage.getItem("nine-AM"));
$("#ten-AM .tasks").val(localStorage.getItem("ten-AM"));
$("#eleven-AM .tasks").val(localStorage.getItem("eleven-AM"));
$("#twelve-PM .tasks").val(localStorage.getItem("twelve-PM"));
$("#one-PM .tasks").val(localStorage.getItem("one-PM"));

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
    } else if (time=10) {
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
    } else if (time=11) {
        elevenAM.style.backgroundColor="rgb(148, 58, 58)";
        elevenAM.style.color="white";
    } else {
        elevenAM.style.backgroundColor="green";
        elevenAM.style.color="white";
    }
}
elevenColor();




