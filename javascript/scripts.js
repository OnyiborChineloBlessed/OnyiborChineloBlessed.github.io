'use strict';

let counter = 0;
let pick_num;

const pickImage =(img, num)=> {
    const modal = document.querySelector('.image-modal');
	modal.style.display = 'block';
	counter = num;
	pick_num = Number(num) + 1;
	document.querySelector('.modal-img-small').src = img.src;
	document.querySelector('.current').innerText = pick_num;
} 
const navigate = link => window.open(`${link}`,'_self');
let imgArr = [];

	imgArr[0] = 'pictures/main/4.jpg';
	imgArr[1] = 'pictures/main/3.jpg';
	imgArr[2] = 'pictures/main/2.jpg';
	imgArr[3] = 'pictures/main/5.jpg';
	imgArr[4] = 'pictures/main/6.jpg';
	imgArr[5] = 'pictures/main/7.jpg';
	imgArr[6] = 'pictures/images/profile.jpg';
	imgArr[7] = 'pictures/main/8.jpg';
	imgArr[8] = 'pictures/main/9.jpg';
	imgArr[9] = 'pictures/main/10.jpg';
	imgArr[10] = 'pictures/main/11.jpg';
	imgArr[11] = 'pictures/main/12.jpg';
	imgArr[12] = 'pictures/main/13.jpg';
	imgArr[13] = 'pictures/main/14.jpg';
	imgArr[14] = 'pictures/main/15.jpg';
	imgArr[15] = 'pictures/main/16.jpg';
	imgArr[16] = 'pictures/main/17.jpg';
	imgArr[17] = 'pictures/main/18.jpg';
	imgArr[18] = 'pictures/main/19.jpg';
	imgArr[19] = 'pictures/main/20.jpg';
	imgArr[20] = 'pictures/main/21.jpg';
        
const next =()=> {
	counter ++;
	if ( counter >= 20 ) {
		 counter = 0;
	}
	document.querySelector('.modal-img-small').src = imgArr[counter];
	let currentNumber = Number(counter) +1;
	document.querySelector('.current').innerText = `${currentNumber}`;
}

const previous =()=> {
	counter --;
	if ( counter < 0 ) {
		counter = 20;
	}
	document.querySelector('.modal-img-small').src = imgArr[counter];
	let currentNumber = Number(counter) +1;
	document.querySelector('.current').innerText = `${currentNumber}`;
}

const Close =()=> {
	const modal = document.querySelector('.image-modal');
	modal.style.display = 'none';
}
