const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre'
]

const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
]

function startTime() {
    let today = new Date(); // Création d'un nouvel objet Date
    // When no parameters are provided, the newly-created Date object 
    // represents the current date and time as of the time of instantiation

    let monthName = months[today.getMonth()];
    monthName = monthName.toLowerCase();
    let dayName = days[today.getDay()];
    let dayNum = today.getDate();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = addZero(month);
    day = addZero(day);

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = addZero(minute);
    second = addZero(second);

    // Modification du contenu dans le code HTML
    document.getElementById('date-long').innerHTML =
        dayName + " " + dayNum + " "+ monthName + " " + year;

    document.getElementById('date-short').innerHTML =
        day + ":" + month + ":" + year;

    document.getElementById('clock').innerHTML =
        hour + ":" + minute + ":" + second;

    setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}