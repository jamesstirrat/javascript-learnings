const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'block') {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  } else { 
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  }
});


descriptionButton.addEventListener('click', () => {
  //p.textContent = input.value + ':';   
  descriptionP.innerHTML = descriptionInput.value + ':';  
                        });


addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];                        
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li)
});

//handler
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];                        
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
