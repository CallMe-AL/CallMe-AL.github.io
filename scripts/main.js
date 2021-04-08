let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tj-and-ja.jpg'){
        myImage.setAttribute('src', 'images/tj-and-ja2.jpg');
    } else {
        myImage.setAttribute('src', 'images/tj-and-ja.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName){
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to this history page, ' + myName;  
    }
    
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Friends Divided, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}