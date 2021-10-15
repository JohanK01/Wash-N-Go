'use strict';

function Loginfunction() {
    let inputEmail = document.getElementById('email').value;
    let inputPas = document.getElementById('pas').value;

    if (inputEmail == 'test' && inputPas == '123') {
        window.location.href = '../html/app.html';
    } 
    else if(inputEmail == 'anka' && inputPas == '321'){
        window.location.href = '../html/admin.html';
    } 
    else{
        alert('That is not a valid account');
    }
}