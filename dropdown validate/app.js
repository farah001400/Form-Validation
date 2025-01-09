function checkForSelection(seleectId){
    var countries = document.getElementById(seleectId);
    if(countries.selectedIndex === 0){
        alert("Please select a country");
        countries.focus();
        countries.style.border = "4px solid red";
        return false
    }
    alert("You have selected a Country")
    return true
}