var itemList = document.getElementById('items');
var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure?.....')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
}
function addItem(e){
    e.preventDefault();
  
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
  li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
    var editBtn = document.createElement('button');
   editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
    itemList.appendChild(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  }
