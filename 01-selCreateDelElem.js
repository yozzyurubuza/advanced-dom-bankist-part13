'use strict';

//How the DOM really works

/*
DOM = interface between JS and Browser

- Allows Javascript to interact with the browser
- Can create, modify, and delete HTML elements, set styles, classes, and attributes; and listen and respond to events.
- DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.
Ex. querySelector() / addEventListener() / .createElement()
*/

// Selecting, Creating, and Deleting Elements

// Selecting elements
//Select entire element of HTML
console.log(document.documentElement);
//Select head / body
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //Select 1st header
const allSection = document.querySelectorAll('.section'); //select all
console.log(allSection);

document.getElementById('section--1');

//Returns HTMLCollection - Updates automatically
//Nodelist does not update automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and Inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Add as the 1st child of the element
header.prepend(message);
// Add as the last child of the element
//Only 1 will appear
// header.append(message);
// header.append(message.cloneNode(true)); // Duplicate

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); //Old implementation
  });
