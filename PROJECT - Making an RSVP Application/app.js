const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

// -----------> function for creating a list element in our ul
function createLi(text) {
  //creating list element
  const li = document.createElement('li');
  //setting list element textContent to our input text (defined in the event handler for the input field.
  li.textContent = text;
  //setting a label for checkbox - giving it immutable content
  const label = document.createElement('label');
  label.textContent = 'confirmed';
  //creating a checkbox 
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  //appending checkbox to parent (label) and appending label to parent(li)
  label.appendChild(checkbox);
  li.appendChild(label);
  //creating a remove button - event handler for remove button defined below
  const button = document.createElement('button');
  button.textContent = 'remove';
  //appending button to parent (li)
  li.appendChild(button); 
  //appending li to parent (ul)
  ul.appendChild(li);
  //returning the function as JS does not by default
  return li;
}

// -----------> handler for the input submission
form.addEventListener('submit', (e) => {
  //prevent default behaviour
  e.preventDefault();
  //constant for our input value
  const text = input.value;
  //relaying input value into our 'createLi' function
  const li = createLi(text);
  //reset input field to an empty string
  input.value = ' ';  
    
});

// -----------> handler for the checkbox. We are giving a formatting to the checkbox whenever it is checked. Also changing the className of the li. NB: We are workingwith the 'change' event rather than the 'click' event.
ul.addEventListener('change', (e) => {
  //create a checkbox target
  const checkbox = event.target;
  //
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
    
  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = ' ';
  }
});

// -----------> handler for the remove button.
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode; 
    ul.removeChild(li);
  }
});