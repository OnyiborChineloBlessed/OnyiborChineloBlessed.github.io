'use strict';
const toggle_menu =()=> {
    const navigation = document.querySelector('.side-navigation');
    const modal_navigation = document.querySelector('.modal-nav');
    if ( navigation.style.width !== '190px' &&  modal_navigation.style.display != 'block' ) {
         navigation.style.width = '190px';
         modal_navigation.style.display = 'block';
    } else {
        navigation.style.width = '0';
        modal_navigation.style.display = 'none';
    }
}

const contactModal =()=> {
    const contactModal = document.querySelector('.contact-modal');
    if( contactModal.style.display !=='block' ) {
        contactModal.style.display = 'block';
    } else {
        contactModal.style.display = 'none'
    }
}
