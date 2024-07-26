const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const numEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthEl.innerText = date.toLocaleString("en",{
    month:"long",
});

dayEl.innerText=date.toLocaleString("en",{
    weekday:"long",
});

numEl.innerText=date.getDate();
yearEl.innerText=date.getFullYear();