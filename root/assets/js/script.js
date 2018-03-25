"use strict"
window.addEventListener('mouseup', function (event) {
    let box = document.getElementById('main-menu');
    let trigger = document.querySelector('.menu-toggler');
    let triggerSmall = document.querySelector('#smallMenu-toggler');
    console.log(trigger);
    console.log(event.target);
    if (event.target == trigger || (box.classList.contains("show") && event.target != trigger)) {
        box.classList.toggle("show");
    } else if (box.classList.contains("show") && event.target == triggerSmall) {
        return;
    }
});
function toggle() {
    let dropdown = document.getElementById('dropdown-list');
    dropdown.classList.toggle("show");
}

function validateForm() {
    let firstName = document.forms["myForm"]["firstName"];
    let lastName = document.forms["myForm"]["lastName"];
    let message = document.forms["myForm"]["message"];
    // let arr = [firstName, lastName, message];
    let errorMsg = document.getElementsByClassName('error');
    const minInput = 3;
    const maxInput = 20;
    const minMessage = 30;
    const maxMessage = 150;
    let x = firstName.value.replace(/ /g, '').length;
    let y = lastName.value.replace(/ /g, '').length;
    let m = message.value.replace(/ /g, '').length;
    let letterOnly = /^[a-zA-Z\s]*$/;
    let alphaExp = /^[0-9a-zA-Z\s]*$/;

    if ((x < minInput || x > maxInput || !firstName.value.match(letterOnly)) || (y < minInput || y > maxInput || !lastName.value.match(letterOnly)) || 
        (m < minMessage || m > maxMessage || !lastName.value.match(alphaExp))) {
        
        for (let i = 0; i < errorMsg.length; i++) {
            errorMsg[i].classList.add("show");
        }

        if (x < minInput || x > maxInput || !firstName.value.match(letterOnly)) {
           firstName.classList.remove('valid');
            firstName.classList.add('invalid'); 
        } else {
            firstName.classList.remove('invalid');
            firstName.classList.add('valid');
        }
        if (y < minInput || y > maxInput || !lastName.value.match(letterOnly)) {
            lastName.classList.remove('valid');
            lastName.classList.add('invalid'); 
        } else {
            lastName.classList.remove('invalid');
            lastName.classList.add('valid');
        }
        if (m < minMessage || m > maxMessage) {
            message.classList.remove('valid');
            message.classList.add('invalid'); 
        } else {
            message.classList.remove('invalid');
            message.classList.add('valid');
        }

        return false

    } else {
        return true
    }
    // if (firstName.value.replace(/ /g, '').length < minInputLength || firstName.value.replace(/ /g, '').length > maxInputLength) {
    //     document.getElementsByClassName('error')[0].classList.add("show");
    //     firstName.classList.remove('valid');
    //     firstName.classList.add('invalid');
    //     return false
    // } else {
    //     firstName.classList.remove('invalid');
    //     firstName.classList.add('valid');
    //     return true
    // }
    

    // if (firstName.value.replace(/ /g, '') === "" || lastName.value.replace(/ /g, '') === "" || message.value.replace(/ /g, '') === "") {
    //     document.getElementsByClassName('error')[0].classList.add("show");
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].value.replace(/ /g, '') === "") {
    //             arr[i].classList.remove('valid');
    //             arr[i].classList.add('invalid');
    //         } else {
    //             arr[i].classList.remove('invalid');
    //             arr[i].classList.add('valid');
    //         }
    //     }
    //     return false;
    // } else {
    //     return true;
    // }
}