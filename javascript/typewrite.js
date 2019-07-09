'use strict';
let i = 0;
let speed = 225;
let txt = 'Miss Glamour';
const type =()=> {
if( i < txt.length ) {
const dom_arr = [
document.querySelector('.user-name'),
document.querySelector('.user-name-two')
];  
for ( let x = 0; x < dom_arr.length; x++ ) {
      dom_arr[x].innerHTML += txt.charAt(i);
}
i++;
setTimeout(type, speed);
    }
}
type();