const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myReset = document.getElementById('myReset');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

myReset.addEventListener('click', () => {
  myHeading.style.color = 'black';
});
