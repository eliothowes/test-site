var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/Eliot/web-projects/test-site/images/artist-impression.jpg') {
      myImage.setAttribute ('src','/Users/Eliot/web-projects/test-site/images/artist-impression-greyscale.jpg');
    } else {
      myImage.setAttribute ('src','/Users/Eliot/web-projects/test-site/images/artist-impression.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Design & Drafting are Awesome, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Design & Drafting are Awesome, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
