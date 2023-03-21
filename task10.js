var form = document.getElementById('my-form');
form.addEventListener('submit',addToStorage);
function addToStorage(e){
    var name = document.getElementById('name').value;
    var emailId = document.getElementById('email').value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailId',emailId);
}