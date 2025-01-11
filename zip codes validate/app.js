function validateZip() {
    var zipCode = document.getElementById('zipCode').value;
    if (zipCode.length < 5 || zipCode.length > 5) {
        alert('Please enter 5 digit code');
        return false
    }
    for (var i = 0; i < zipCode.length; i++) {
        var enteredValue = parseInt(zipCode[i]);
        if (isNaN(enteredValue)) {
            alert('Please enter digits only');
            return false
        }
    }
    alert('ZIP code has been submmited')
    return true
}
