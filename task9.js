var itemList = document.getElementById('items');
var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);
var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e){
   
    var text = e.target.value.toLowerCase();
   

    var items = itemList.getElementsByTagName('li');


    Array.from(items).forEach(function(i)
    {
      var itemName = i.textContent;
      console.log(itemName);
      if(itemName.toLowerCase().indexOf(text) != -1)
      {
        i.style.display = 'block';
      } else 
      {
        i.style.display = 'none';
      }
    });
  }



 
  function addItem(e){
    e.preventDefault();
    
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    const li = document.createElement('li');
    li.className='list-group-item';
    const newText = document.createTextNode(newItem);
    const descNode = document.createTextNode(description);
    li.appendChild(newText);
   
    li.appendChild(descNode);
    // console.log(li);
    var editBtn = document.createElement('button');
   editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
    itemList.appendChild(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-secondary btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

  }