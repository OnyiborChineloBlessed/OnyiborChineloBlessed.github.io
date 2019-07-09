'use strict';

//modal object literals
const domContents = {
    modalText: {
        articleTxt: 'I will write articles for you at an affordable price using MS word or any other prefered software.',
        graphicsTxt: 'I will create dynamic banners, posters and logos for you at an affordable price using corelDraw.',
	    editingTxt: 'I will make your image look sharper and brighter with photoshop at an affordable price.',
        articleHead: 'MS WORD',
        graphicsHead: 'CorelDRAW',
        editHead: 'Photoshop'
    },
     modalDom: {
	    modal: document.querySelector('.modal-text'),
	    modalMain: document.querySelector('.hide'),
        modalHead: document.querySelector('.modal-details-head'),
        button: document.querySelector('.exit')
    },
    classNames: {
        show: "modal-detail",
        hide: "hide",
    },
    socialDom: {
        facebookDom: document.querySelector('#facebook-info'),
        yahooDom: document.querySelector('#yahoo-info'),
        whatsappDom: document.querySelector('#whatsapp-info')
    },
    socialLinks: {
        facebook: 'chinelo.blessingblessing',
        yahoo: 'chineloblessed@yahoo.com',
        whatsapp: '08167439579'
    }
};

//destructure modal object literal {nested}
const { articleTxt, graphicsTxt, editingTxt, articleHead, graphicsHead, editHead } = domContents.modalText;
const { modal, modalMain, modalHead, button } = domContents.modalDom;
const { facebookDom, yahooDom, whatsappDom } = domContents.socialDom;
const { facebook, yahoo, whatsapp } = domContents.socialLinks;
const { show, hide } = domContents.classNames;


//constructor class 
class modalProps {
    constructor( arcTxt, graphTxt, editTxt, arcHead, graphHead, editHead, on ) {
        this.article = arcTxt;
        this.graphics = graphTxt;
        this.editing =  editTxt;
        this.articleHead = arcHead;
        this.graphicHead = graphHead;
        this.editHead =  editHead;
        this.appear = on;
    }
}

//chain the modalProps constructor class as extension for the mediaProps constructor class
class mediaProps extends modalProps {
    constructor( arcTxt, graphTxt, editTxt, arcHead, graphHead, editHead, on, facebookContainer, yahooContainer, whatsappContainer, facebookContact, yahooContact, whatsappContact ) {
        super( arcTxt, graphTxt, editTxt, arcHead, graphHead, editHead, on );
            this.mediaContentOne = facebookContainer;
            this.mediaContentTwo = yahooContainer;
            this.mediaContentThree = whatsappContainer;
            this.mediaContentFour = facebookContact;
            this.mediaContentFive = yahooContact;
            this.mediaContentSix = whatsappContact;
    }
}

//instantiate modalprops class
const Modal = new mediaProps( articleTxt, graphicsTxt, editingTxt, articleHead, graphicsHead, editHead, show, facebookDom, yahooDom, whatsappDom, facebook, yahoo, whatsapp );

//External modalprops member props
mediaProps.prototype.preprocessor = function() {
    modalMain.className = this.appear;
    modalHead.innerText = this.articleHead;
    modal.innerText = this.article;
};

mediaProps.prototype.graph = function() {
    modalMain.className = this.appear;
    modalHead.innerText = this.graphicHead;
    modal.innerText = this.graphics;
};

mediaProps.prototype.edit = function() {
    modalMain.className = this.appear;
    modalHead.innerText = this.editHead;
    modal.innerText = this.editing;
};

mediaProps.prototype.createFacebookLink = function() {
    this.mediaContentOne.innerText = this.mediaContentFour;
    
};

mediaProps.prototype.createYahooLink = function() {
    this.mediaContentTwo.innerText = this.mediaContentFive;
};

mediaProps.prototype.createWhatsappLink = function() {
   this.mediaContentThree.innerText = this.mediaContentSix;
};

Modal.createFacebookLink();
Modal.createYahooLink();
Modal.createWhatsappLink();

//Arrow function to hide modal
const exit =()=> modalMain.className = hide;