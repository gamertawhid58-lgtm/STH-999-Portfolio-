let myRoles = ["Web-Developer","Front-end-Developer","Content-Creator"];
let dynamicTextForHtml = document.getElementById("dynamic-text");
let index = 0;



function Dynamic_text() {
    
    if(index === myRoles.length) {
        index = 0;
    }
dynamicTextForHtml.innerText = myRoles[index];
index++;
}

Dynamic_text();

setInterval(Dynamic_text , 2500);