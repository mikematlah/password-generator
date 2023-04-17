const generateBtn = document.getElementById('generate-btn')
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
const inputEl = document.getElementById('input-el')
const nunmersOnly = document.getElementById('numbers-only')
const toggler = document.getElementById ('toggler')


const characters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
 "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
 ",","|",":",";","<",">",".","?",
"/"];
const numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

generateBtn.addEventListener('click',function(){
    passwordOne.textContent = ''
    passwordTwo.textContent = ''
    generatePasswords()
})
toggler.addEventListener('change',function(){
    if(toggler.checked){
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light')
    }
  
})
function genereateSymbolsPassword(){
    let passwordLength = inputEl.value
    for (let i = 0; i < passwordLength;i++){
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        passwordOne.textContent +=characters[randomIndex1]
        passwordTwo.textContent +=characters[randomIndex2]
    }
}
function generateNumbersPassword(){
    let passwordLength = inputEl.value
    for (let i = 0; i < passwordLength;i++){
        let randomIndex1 = Math.floor(Math.random() * numbers.length)
        let randomIndex2 = Math.floor(Math.random() * numbers.length)
        passwordOne.textContent +=numbers[randomIndex1]
        passwordTwo.textContent +=numbers[randomIndex2]
    }
}
function generatePasswords(){

    if(nunmersOnly.checked){
        generateNumbersPassword()
    }else{
        genereateSymbolsPassword()
    }
    inputEl.value = ''
}
passwordOne.onclick = function() {
    document.execCommand("copy");
  }
  passwordTwo.onclick = function() {
    document.execCommand("copy");
  }
  
  passwordOne.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", passwordOne.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
  passwordTwo.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", passwordTwo.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
