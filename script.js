var time = moment().format("h:mm:ss a");
console.log(time);

// Live date and updated time function
function displayTime (){var currentTime = moment()
    $("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm a'));}
    setInterval(displayTime, 1000)

