document.getElementById("cashout-btn").addEventListener("click", function(){
    // cashoutNumber
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }
    // cashoutAmount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    
    // cashoutPin
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    if(cashoutPin === '1234'){
        alert("Cashout Successful");
        console.log("New Balance", newBalance)
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
    }
});