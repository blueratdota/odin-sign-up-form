console.log('hello world');
const firstName = document.querySelector("#first_name")
const lastName = document.querySelector("#last_name")
const userEmail = document.querySelector("#user_email")
const phoneNum = document.querySelector("#phone-number")
const inputPwOne = document.querySelector("#user_password-1")
const inputPwTwo = document.querySelector("#user_password-2")
const shortMsg = document.querySelector("#create-status")
const submitBtn = document.querySelector("#create-account")

function checkAllFields(){
    let toCheck = [firstName,lastName,userEmail,phoneNum,inputPwOne,inputPwTwo]
    let status = ''
    for(let i in toCheck){
        if(toCheck[i].value==''){
            status = true
            break
        }
        else{
            status = false
        }
    }
    return status
}

submitBtn.addEventListener('click',function(e){
    if(checkAllFields()){
        shortMsg.textContent = "Please input details on all required fields"
    }
    
    else{
        if(inputPwOne.value!=inputPwTwo.value){
            shortMsg.textContent = "Password does not match!"
            inputPwTwo.classList.add("invalid-box")
            e.preventDefault()
        }
        if(inputPwOne.value==inputPwTwo.value & inputPwOne.value.length>=8){
            shortMsg.textContent = "Details submitted!"
            return true  
        }
    }
})
