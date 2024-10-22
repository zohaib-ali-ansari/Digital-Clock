var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var period = document.getElementById("period");
var currentDate = document.getElementById("date");
var dayName = document.getElementById("dayname")


function clock() {

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var amPm = h >= 12 ? "PM" : "AM";
    var date = time.toLocaleDateString();
    var day = time.toLocaleDateString("en-US", { weekday: "long" })

    if (h > 12) {
        h = h - 12;
    }

    if (h == 0) {
        h = 12;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    period.innerText = amPm;
    currentDate.innerText = date;
    dayName.innerText = day;
}
setInterval(clock, 1000);

