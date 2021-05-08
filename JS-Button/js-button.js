let count = 0;

function clicme() {
    count++;
    let displayCount = document.getElementById('displayCount').innerHTML = " " + count + " ";
}

function reset() {
    count = 0;
    let displayCount = document.getElementById('displayCount').innerHTML = " " + count + " ";
}