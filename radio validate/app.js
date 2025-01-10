function validateRadio(){
    var radios = document.getElementsByName('r1');
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            alert('submmited');
            return true
        }
    }
    alert("Please select your gender");
    return false
    
}