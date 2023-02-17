function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }

}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displatPinField = document.getElementById('display-pin');
    displatPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){

    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number')
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){

        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displatPinField = document.getElementById('display-pin');
    const currentPin = displatPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinNotSuccessMessage = document.getElementById('pin-notsuccess');
    if(typedNumber === currentPin){
        
        pinSuccessMessage.style.display = 'block';
        pinNotSuccessMessage.style.display ='none';
    }

    else{
       
        pinNotSuccessMessage.style.display ='block'; 
        pinSuccessMessage.style.display = 'none';
    
    }
})