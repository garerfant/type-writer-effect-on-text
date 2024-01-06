let myText = 'Hello Everyone My Name Is Essam, I Love Programming',
    i = 0,
    myButton = document.getElementById('button');

myButton.onclick = function(){
    'use strict';

    const typeWriter = setInterval(function(){
        document.getElementById('type').textContent += myText[i];
        i = i + 1;
        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        } 
    },200);
};