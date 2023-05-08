const apiLink= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=132f4127b4d2b00db3532a9a9560679b&page=1";
const img_path= "https://image.tmdb.org/t/p/w1280";
const searchAPI= "https://api.themoviedb.org/3/search/movie?&api_key=132f4127b4d2b00db3532a9a9560679b&query=";

const main= document.getElementById("section");
const form= document.getElementById("form");
const query= document.getElementById("query");

function returnMovies(url){
    //Simplest form of fetch() has one argument (path to the resource you want to fetch) which returns
    //a promise that resolves with a Response object.
    //The response object doesnt directly contain the actual JSON response body. 
    //Its a representation of the entire HTTP response. 
    //To extract the JSON body content from the Response object, we use the json() method. 
    //It returns a second promise that resolves with the result of parsing the response body text as JSON.
    
    
    fetch(url).then(res => res.json()).then(function(data){//fetch url; extract response object; pass response object into a function to extract data
        console.log(data.results);//with this data
        data.results.forEach(element => {
                const div= document.createElement('div');
        });
    });
}