const keyFromInput = document.querySelector("#input-key")
const valueFromInput = document.querySelector("#input-value")
const inputSubmitBtn = document.querySelector("#submit-btn")
const showOutput = document.querySelector("#output")



inputSubmitBtn.addEventListener("click",setInLocalstorage)


function setInLocalstorage (){
    //set in localstorage
    const keyValue = keyFromInput.value.toUpperCase()
    
    const valueValue = valueFromInput.value
    
    if(isNaN(keyValue) == true && isNaN(valueValue) == false){
        localStorage.setItem(keyValue,valueValue)
        location.reload()
    } else{
        alert("put a number in age box & put a name in name box")
    }
}
for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    showOutput.innerHTML += `${key} : ${value}<br />` 
}
    

