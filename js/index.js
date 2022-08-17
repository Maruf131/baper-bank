// step 1 : add click event handler with the submit button 
document.getElementById('button-submit').addEventListener('click', function () {
    // step 2 : get the email address inside the email input field
    //alawyes remember to use .value to get text form an input field 
    const emailFaild = document.getElementById('user-email');
    const email = emailFaild.value;
    // step 3 : get password 
    // 3.a : set id on the html element 
    // 3.b : get the element 
    // 3.c : get the value from the password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER : do not verify emsil password on the clint side 
    // step 4 : verify email and password
    if (email === 'maruf@gmail.com' && password === 'tony') {
        window.location.href = 'bank.html'
    }
    else {
        alert('password vul dile tor 12 ta bajay dimu');
    }

})