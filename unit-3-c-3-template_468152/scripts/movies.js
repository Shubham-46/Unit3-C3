// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//api=`http://www.omdbapi.com/?apikey=638a97f4&s={moviename}


// let amt=JSON.parse(localStorage.getitem("amount")) || []

// document.getElementById("wallet").innerHTML=amt

async function search_movies(){
    console.log("hey")
    let moviename=document.getElementById("search").value
        let url=`https://www.omdbapi.com/?apikey=638a97f4&s=${moviename}`
        let res=await fetch(url)
        let data=await res.json()
        // console.log("Data:",data)

        let movie=data.Search
        console.log("Movies:",movie)

       appendMovies(movie)
        // moviesresult(data.result)
        
        // let data=await res.json()
        // console.log(data)
    
}


function appendMovies(movie){

    let movies=document.getElementById("movies")
    
    movie.map(function (element){

        let div=document.createElement("div")
        div.setAttribute("class","div1")
        let img=document.createElement("img")
        img.setAttribute("class","c3")
        img.src=element.Poster

        let title=document.createElement("p")
        title.innerText=element.Title

        let btn=document.createElement("button")
        btn.innerText="Book this show"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            bookmyshow(element)
        })

        div.append(img,title,btn)
        movies.append(div)
        })

}


let arr=JSON.parse(localStorage.getItem("movie")) || []
function bookmyshow(element){
    arr.push(element)
    console.log("arr",arr)
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
}
// function moviesresult(movies_list){
//     movies_list.forEach(element => {
        
//         let div=document.createElement("div")

//         let img=document.createElement("img")
//         img.src=element.Poster

//         div.append(img)
//         movies.append(div)

//     })
// }


///debounce/////////////


let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
   id=setTimeout(function(){
    func()
   },delay)
}

