console.log("lets start");

const password = document.getElementById('password');
const showPassword = document.querySelector('.toggle');
let strengthLevel = document.querySelector('.strength-level');
strengthLevel.textContent = '';
password.addEventListener('input', function(){
    const value = password.value;
    let atLeast = document.getElementById('atleast');
    let oneUpper = document.getElementById('oneUpper');
    let oneLower = document.getElementById('oneLower');
    let oneNumber = document.getElementById('oneNumber');
    let oneSpecial = document.getElementById('oneSpecial');
    let score = 0;
    if (value.length === 0) {
        strengthLevel.style.width = '0%';
        strengthLevel.textContent = '';

        atLeast.style.color = '#555';
        oneUpper.style.color = '#555';
        oneLower.style.color = '#555';
        oneNumber.style.color = '#555';
        oneSpecial.style.color = '#555';

        return;
        }
    if(value.length < 8){
        atLeast.style.color = 'red';
    }else if(value.length >= 8){
        atLeast.style.color = 'green';
        score++;
    }

    if(hasUpperCase(value)){
        oneUpper.style.color = 'green';
        score++;
    }else{
        oneUpper.style.color = 'red';
    }

    if(hasLowerCase(value)){
        oneLower.style.color = 'green';
        score++;
    }else{
        oneLower.style.color = 'red';
    }

    if(hasNumber(value)){
        oneNumber.style.color = 'green';
        score++;
    }else{
        oneNumber.style.color = 'red';
    }

    if(hasSpecial(value)){
        oneSpecial.style.color = 'green';
        score++;
    }else{
        oneSpecial.style.color = 'red';
    }

    updateStrengthBar(score);

});

showPassword.addEventListener("click", function(){
    if(password.type === 'password'){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
})

function hasUpperCase(str){
    return /[A-Z]/.test(str);
}

function hasLowerCase(str){
    return /[a-z]/.test(str);
}

function hasNumber(str){
    return /\d/.test(str);
}

function hasSpecial(str){
    return /[^a-zA-Z0-9\s]/.test(str);
}


function updateStrengthBar(score) {
  if (score <= 1) {
    strengthLevel.style.width = '20%';
    strengthLevel.style.background = '#ff3b3b';
    strengthLevel.textContent = 'Very Weak';
  } else if (score === 2) {
    strengthLevel.style.width = '40%';
    strengthLevel.style.background = '#ff8c00';
    strengthLevel.textContent = 'Weak';
  } else if (score === 3) {
    strengthLevel.style.width = '60%';
    strengthLevel.style.background = '#f1c40f';
    strengthLevel.textContent = 'Average';
  } else if (score === 4) {
    strengthLevel.style.width = '80%';
    strengthLevel.style.background = '#2ecc71';
    strengthLevel.textContent = 'Good';
  } else {
    strengthLevel.style.width = '100%';
    strengthLevel.style.background = '#27ae60';
    strengthLevel.textContent = 'Strong';
  }
}



