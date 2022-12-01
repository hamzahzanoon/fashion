const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedneday",
    "Friday",
    "Saturday",
];


const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items    = document.querySelectorAll(".deadline-format h2");

let futureDate = new Date(2023, 1, 1, 1, 0);

const year    = futureDate.getFullYear();
const hours   = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date    = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway endss on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000;
    //1m = 60s;
    //1hr = 60m;
    //1d = 24hr;

    //values in ms 
    const oneDay = 24 * 60 * 60 *1000;
    const oneHour = 60 * 60 * 1000;
    const onMinute = 60 * 1000;
    //calcucalte all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / onMinute);
    let seconds = Math.floor((t % onMinute) / 1000);

    //set alues array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }else {
            return item;
        }
    }
        items.forEach(function(item, index) {
            item.innerHTML = format(values[index]);
        });
        if(t < 0) {
            clearInterval(countdown);
            deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
        }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();