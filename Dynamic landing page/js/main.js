// Author: Kyan Keise
// Date: 25/03/2022 
// Title: Dynamic Landing page

// DOM elements 
const time= document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();



// set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
hour = hour % 24 || 24;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime,1000);
}

// Add Zero
function addZero(n) {
    return(parseInt(n,10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour <12) {
        // morning
        document.body.style.backgroundImage = "url('images/morning.jpg')";
        greeting.textContent = 'Good Morning';

    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('images/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

    // Get name

function getName() {
    if(localStorage.getItem('name')== null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set Name
function setName(e) {
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get focus
function getFocus() {
    if(localStorage.getItem('focus')== null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set Focus
function setFocus(e) {
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keyprress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keyprress', setFocus);
focus.addEventListener('blur', setFocus);



//Run
showTime();
setBgGreet();
getName();
getFocus();