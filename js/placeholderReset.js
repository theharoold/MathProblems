function disablePlaceholder(inputId){
  document.getElementById(inputId).setAttribute("placeholder","");
}

function resetPlaceholder(inputId, text){
  document.getElementById(inputId).setAttribute("placeholder", text);
}