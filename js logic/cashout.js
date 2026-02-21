document.getElementById("cashout-btn").addEventListener("click", function(){
    // cashoutNumber
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);

    // cashoutAmount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // cashoutPin
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    console.log(cashoutPin);
});