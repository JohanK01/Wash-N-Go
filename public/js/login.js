'use strict';

function Loginfunction() {
    let inputEmail = document.getElementById('email').value;
    let inputPas = document.getElementById('pas').value;

    if (inputEmail == 'test' && inputPas == '123') {
        window.location.href = '../html/app.html';
    } else{
        alert('That is not a valid account');
    }
}