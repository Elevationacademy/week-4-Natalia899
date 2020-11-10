// Exercise1

/*const fetch = function (isbn) {

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
           let title = data.items[0].volumeInfo.title
         console.log(title);
        },
        error: function (xhr, text, error) {
            console.log(text)
        } 
    }) 
}
fetch(9782806269171)

//Exercise 2
const fetch = function (iqueryType, queryValue) {

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${iqueryType}:${queryValue}`,
        success: function (data) {
           
         console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(data)
        } 
    }) 
}
fetch("isbn", 9789814561778)

//exercise3
const fetch = function (iqueryType, queryValue) {

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${iqueryType}:${queryValue}`,
        success: function (data) {
            console.log(data);
           data.items.forEach( element=>{
             let title = data.items[0].volumeInfo.title
             let author = data.items[0].volumeInfo.authors[0]
             let isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier
            
             console.log(title+author+isbn);
           })
     
        },
        error: function (xhr, text, error) {
            console.log(data)
        } 
    }) 
}
fetch("isbn", 9789814561778)*/

//Exercise4


