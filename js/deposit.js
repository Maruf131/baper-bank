// step 1 : add event listner to the deposit button
document.getElementById('button-deposit').addEventListener('click', function () {
    //step 2: get the deposit ammount from the deposit input field
    // for input field use .value to the value inside the input field  
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);

    //step-3 : get the current deposit total
    // for-non input (element other then input ,textarea), use innertext to get thr text
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    // step-4: add number to set the total diposit 
    const currentDepositTotal = previusDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 : gett balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalString);

    // step - 6: calculate current total balane 
    const currentBalaneTotal = previusBalanceTotal + newDepositAmount;
    //set the balanece total 
    balanceTotalElement.innerText = currentBalaneTotal;


    // step 7 :  clear the deposit field 

    depositField.value = '';

})