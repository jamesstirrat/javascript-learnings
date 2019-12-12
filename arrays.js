var buildings = ['Portland Place', 'Gherkin', 'Neobank', 'Tate Modern'];

console.log(buildings[0]);

//push adds element to last index of array 
buildings.push('Lloyds of London');

//pop removes element at last index of array
buildings.pop();


buildings.forEach(function(building) {
    prompt("What rating do you give this movie?");              
});