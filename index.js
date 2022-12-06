const containerE1 = document.querySelector(".container");
const carrers = [ "GETTHO YOUTH","PARENT","SON","PAPA","FARMER","WIFE" ,"HUSBAND","RAPPER"];

let carrerIndex = 0;

 let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerE1.innerHTML = `
    <h1>I am a ${carrers[carrerIndex].slice(0,characterIndex)} </h1>
    `;
  
   if (characterIndex ===carrers[carrerIndex].length){carrerIndex++;
    characterIndex = 0;}
   if (carrerIndex === carrers.length) {carrerIndex = 0;}
   setTimeout(updateText, 400);
}



