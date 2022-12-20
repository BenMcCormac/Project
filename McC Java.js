var priceArray=[29980, 30690, 31400, 49400, 43015, 54170, 57270];
var loanArray=[247, 253, 258, 409, 337, 448]

console.log(priceArray[1]);
console.log(loanArray[1]);

function price()
{
    num1 = document.getElementById("Car").value;
    document.getElementById("result").innerHTML = priceArray[num1-1];
    document.getElementById("loan").innerHTML = loanArray[num1-1];
}