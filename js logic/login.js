document.getElementById("login-btn").addEventListener("click", function (){
    // number
    const inputNumber= document.getElementById("number-input");
    const contactNumber= inputNumber.value;
    console.log("contactNumber");

    // pin
    const inputPin= document.getElementById("pin-input");
    const pin= inputPin.value;
    console.log("pin");

    // login logic
    if(contactNumber==01234567890 && pin==1234){
        alert("Login Success");
        window.location.assign("home.html")
    }
    else{
        alert("Login Failed");
    }

});

