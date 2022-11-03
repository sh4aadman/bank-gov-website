document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmountString = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmountString.value;
    const withdrawAmount = parseFloat(withdrawAmountValue);

    const previousWithdrawAmountString = document.getElementById('withdraw-amount-total');
    const previousWithdrawAmountValue = previousWithdrawAmountString.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountValue);

    const previousBalanceTotalString = document.getElementById('balance-total');
    const previousBalanceTotalValue = previousBalanceTotalString.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalValue);

    withdrawAmountString.value = '';

    if (withdrawAmount > previousBalanceTotal) {
        alert("Sorry! Can't Withdraw!");

        return;
    }

    else {
        const withdrawAmountTotal = withdrawAmount + previousWithdrawAmount;

        previousWithdrawAmountString.innerText = withdrawAmountTotal;



        const newBalanceTotal = previousBalanceTotal - withdrawAmount;

        previousBalanceTotalString.innerText = newBalanceTotal;

        return;
    }
})