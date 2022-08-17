/*
1. add event handler with the withdraw buttton
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input into a number by using pasefloat
3. get previus withdraw total  
4. calculate total withdraw amount 
4.5.set total withdraw amount 
5 . get the previus balace total
6. claculate balace total
6.5 set the new balance total
7. clear the input field
 */


// step :1 
document.getElementById('button-withdraw').addEventListener('click', function () {
    // step :2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // tsep:3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);

    // step-4
    const currentWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalString);

    // step - 6
    const newBalaneTotal = previusBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaneTotal;

    // step-7
    withdrawField.value = '';
})