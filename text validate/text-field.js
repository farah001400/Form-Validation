function nameValidate(){
    var nameField = document.getElementById('nameField');
    if(nameField.value.length === 0){
        alert('Please enter your name');
        nameField.style.border= '6px solid red';
        nameField.focus();
        nameField.style.background = 'yellow'
        return false
    }
    alert('Your form has been submmited')
    return true
}