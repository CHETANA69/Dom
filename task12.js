var form = document.getElementById('my-form');
form.addEventListener('submit',addToStorage);
function addToStorage(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var emailId = document.getElementById('email').value;
    
    var info = {Name: name,Email: emailId};
    var infoToString = JSON.stringify(info);
    localStorage.setItem(emailId,infoToString);
    
}