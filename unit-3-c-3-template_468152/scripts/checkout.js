// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let arr1=JSON.parse(localStorage.getItem("movie")) || []

arr1.map(function (element){
    let movie=document.getElementById("movie")
    
    let img=document.createElement("img")
    img.setAttribute("class","c1")
        img.src=element.Poster

        let title=document.createElement("p")
        title.innerText=element.Title

        movie.append(img,title)
})
let wallet=JSON.parse(localStorage.getItem("amount")) 
console.log("wallet:",wallet)
let wal=document.getElementById("wallet").value
wal.innerHTML=wallet
function book(){
let s=document.getElementById("number_of_seats").value;
s=s*100;
if(s > wallet ){
    alert("Insufficient Balance!")
}else if(s<wallet) {
    alert("Booking successful!")
}

// let minus=s-wallet;
// localStorage.setItem("amount",JSON.stringify(minus))
// console.log("minus",minus)
}