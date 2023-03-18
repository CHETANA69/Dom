

var listItem = document.querySelector('#items');
console.log(listItem.parentElement);
console.log(listItem.lastElementChild);
console.log(listItem.lastChild);
console.log(listItem.firstElementChild);
console.log(listItem.firstChild);
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);

// 1
var newDiv = document.createElement('div')

newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute("title", 'hello');
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);


// 2
var newNode = document.createElement('l1');
var newNodeText = document.createTextNode('Hello');
newNode.appendChild(newNodeText);
const list = document.getElementById("items");
list.insertBefore(newNode,listItem.children[0]);