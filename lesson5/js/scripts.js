function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");

}

let banner = document.getElementById("banner");
if (d.getDay() === 6) {
        banner.style.display = "block";
} else {
        banner.style.display = "none";
}

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d  = new Date();
let hours       = d.getHours();
let minutes     = d.getMinutes();
let dayName     = daynames[d.getDay()];
let monthName   = months[d.getMonth()];
let year        = d.getFullYear();

