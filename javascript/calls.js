'use strict';

//get buttons IDS
const clickButtons = {
    write:   document.querySelector(".about-btn-one"),
    design:  document.querySelector(".about-btn-two"),
    dynamic: document.querySelector(".about-btn-three"),
    exitBtn: document.querySelectorAll(".disapear"),
};

//Destructure button object
const { write, design, dynamic, exitBtn } = clickButtons;

//callBack method
write.onclick = function() { Modal.preprocessor() };
design.onclick = function() { Modal.graph() };
dynamic.onclick = function() { Modal.edit() };

for ( let iterator = 0; iterator < exitBtn.length; iterator ++ ) {
    exitBtn[iterator].onclick =()=> {
       exit()
    }
}

