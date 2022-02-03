'use strict';

// Styles, Attributes, and Classes

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
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); //Old implementation
  });

// Style
// Inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //Returns nothing
console.log(message.style.backgroundColor); //Returns the inline style

//Returns the properties from css file
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//With the help of parse, you can compute css values with unit
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//Manipulate root property in the style.css
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Absolute version
console.log(logo.getAttribute('src')); // Relative Version
console.log(logo.className);

logo.alt = 'Beautifuly minimalist logo';

// Non-standard attribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href); // Absolute
console.log(link2.getAttribute('href')); //Relative

// Data attributes
console.log(logo.dataset.versionNumber);

//Classes
//Add class, can also accept multiple class values
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use - because it will overwrite all the class
logo.className = 'jonas';
