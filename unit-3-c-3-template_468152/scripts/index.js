// Store the wallet amount to your local storage with key "amount"
let arr=JSON.parse(localStorage.getItem(amount)) || []
function addtowallet(){
    let a=Number(document.getElementById("amount").value)
    console.log("a:",typeof a)
    localStorage.setItem("amount",JSON.stringify(a))
    document.getElementById("wallet").innerText=a
}

function bookmovie(){
    window.location.href="movies.html"
}
