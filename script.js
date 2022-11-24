const empty = "",
 uCase = "ABCDEFGHIJKLMNOPQRSPUVWXYZ",
 lCase = "abcdefghijklmnopqrstuvwxyz",
 number = "0123456789",
 symbol = "!£#$*-`π=^%_@";


const pLength = document.getElementById("p-length"),
 upperCase = document.getElementById("p-uppercase"),
 lowerCase = document.getElementById("p-lowercase"),
 pNumber = document.getElementById("p-number"),
 pSymbol = document.getElementById("p-symbol"),
 submit = document.getElementById("submit"),
 password = document.getElementById("password"),
 copy = document.getElementById("copy");


submit.addEventListener("click", () => {
    let innitailPassword = empty;

    //adding characters to the innital password if option is checked

    upperCase.checked ? (innitailPassword += uCase): "";
    lowerCase.checked ? (innitailPassword += lCase): "";
    pNumber.checked ? (innitailPassword += number): "";
    pSymbol.checked ? (innitailPassword += symbol): "";
    
    password.value = generatePassword(pLength.value, innitailPassword)
});



function generatePassword(l, initailPassword) {
    let pass = "";

    for (let i = 0; i < l; i++) {
        pass += initailPassword.charAt(
            Math.floor(Math.random() * initailPassword.length)
        )
    }

    return pass;
}


//copy function 

copy.addEventListener("click", () => {
    if (password.value === "") {
        alert("Please Generate a password");
    }
    else {
        password.select();
        navigator.clipboard.writeText(password.value).then(() => {
            alert("Password has been copied to clipboard")
            })
    }
})