// QUERYSELECTOR //

// var item = document.querySelector('li:nth-child(2)');
// console.log(item);
// item.style.color = 'green'
// var items = document.querySelector('.list-group-item:nth-child(3)');
// console.log(items);
// items.style.visibility = "hidden";


// QUERYSELECTORALL //

var list = document.querySelectorAll('li');
console.log(list);
list[1].style.color = "green";
var lists = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (var i =0; i < lists.length;i++)
{
    lists[i].style.backgroundColor = "green";
}