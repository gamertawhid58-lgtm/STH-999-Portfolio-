let dynamicTextForHtml = document.getElementById("dynamic-text");
let color_changing_texts = document.getElementById("color_changer_text");
let myRoles = ["Web-Developer","Front-end-Developer","Content-Creator"];
let colors = ["blue","red"]
let index = 0;
let index2 = 0;
let index3 = 0;


function Dynamic_text() {
    
    if(index === myRoles.length) {
        index = 0;
    }
dynamicTextForHtml.innerText = myRoles[index];
index++;
}



function Dynamic_text_color() {
    if (index2 === colors.length) {
        index2 = 0;
    }
color_changing_texts.style.color = colors[index2];
index2++;
}

function Dynamic_text_color2() {
    if (index3 === colors.length) {
        index3 = 0;
    }
dynamicTextForHtml.style.color = colors[index3];
index3++;
}

Dynamic_text_color()
Dynamic_text();
Dynamic_text_color2()

setInterval(Dynamic_text_color2,400)
setInterval(Dynamic_text , 600);
setInterval(Dynamic_text_color,450)

const logo = document.querySelector('.sth-logo');
const originalSrc = logo.src;

logo.addEventListener('mouseover', () => {
    logo.src = logo.src.replace(/[^/]+$/, 'STH-999-logo-blue.png');
});
logo.addEventListener('mouseout', () => {
    logo.src = originalSrc;
});