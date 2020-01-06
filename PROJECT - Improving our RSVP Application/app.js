const form = document.getElementById('registrar');
const input = document.querySelector('input');

//select main div
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

//create new div for checkbox selection (for confirmed guests)
const div = document.createElement('div');
//create label to describe
const filterLabel = document.createElement('label');
//create input for checkbox
const filterCheckbox = document.createElement('input')

//alter text content of label
filterLabel.textContent = "Hide those who haven't responded";
//change input into a div
filterCheckbox.type = 'checkbox';
//append to newly created div
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
//insert newly created div before the established ul
mainDiv.insertBefore(div, ul);

// -----------> handler for filtering checked entries
filterCheckbox.addEventListener('change', (e) => {
    //create a const for checked checkbox
    //create a constant for the children of the list
    const isChecked = e.target.checked;
    const lis = ul.children
    //if box is checked
    if (isChecked) {
        //for loop through children
        for (i = 0; i < lis.length; i++) {
        //each element assigned to a variable
        let li = lis[i];
        //if the element is responded to eg. class name is 'responded'
        if (li.className === 'responded') {
            li.style.display = 'visible';
        } else {
            li.style.display = 'none';
            }
          }
        } else {
          for (i = 0; i < lis.length; i++) {
            let li = lis[i];
            li.style.display = '';    
          }
        }
      });



// -----------> function for creating a list element in our ul
function createLi(text) {
  //creating list element
  const li = document.createElement('li');
  //setting list element textContent to our input text (defined in the event handler for the input field.
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span)
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
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  editButton.className = 'editButton';
  //appending button to parent (li)
  li.appendChild(editButton);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  removeButton.className = 'removeButton';
  //appending button to parent (li)
  li.appendChild(removeButton); 
  //appending li to parent (ul)
  ul.appendChild(li);
  //returning the function as JS does not by default
  return li;
}

//create pop up for empty input. eg user must input 1 or more characters for the submit to work
//select form
//select input
//if input.value === ' ' or has no characters.
//alert("please enter something!")
//return false 
//else createLi

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
  if (e.target.className === 'removeButton') {
    const li = e.target.parentNode;
    const ul = li.parentNode; 
      ul.removeChild(li);
      } else if (e.target.textContent === 'edit') {
        const li = e.target.parentNode;
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        const button = document.querySelector('.editButton');
        button.textContent = 'save';
        } else if (e.target.textContent === 'save') {
          const li = e.target.parentNode;
          const input = li.firstElementChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          const button = document.querySelector('.editButton');
          button.textContent = 'edit';
    }
});

//create text input in li item
//replace text input in li with input field
//remove the text from the li item