document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmountString = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmountString.value;
    const depositAmount = parseFloat(depositAmountValue);

    const previousDepositAmountString = document.getElementById('deposit-amount-total');
    const previousDepositAmountValue = previousDepositAmountString.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountValue);

    const depositAmountTotal = depositAmount + previousDepositAmount;

    previousDepositAmountString.innerText = depositAmountTotal;

    depositAmountString.value = '';

    const previousBalanceTotalString = document.getElementById('balance-total');
    const previousBalanceTotalValue = previousBalanceTotalString.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalValue);

    const newBalanceTotal = previousBalanceTotal + depositAmount;

    previousBalanceTotalString.innerText = newBalanceTotal;
})