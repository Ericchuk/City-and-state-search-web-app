const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
let searchBar = document.querySelector("#search");
// let regex = /searchBar.value/gi;
let regex = new RegExp(searchBar.value, "gi");
console.log(api);
async function seekInfo(){
    
    let response = await fetch(api);
    let data = await response.json();
    cities.push(...data);
    
    for(let i = 0; i < data.length; i++){
    //  console.log(data[i].city, data[i].state);
     function check(){
        if(data.city.match(regex) || data.state.match(regex)){
            console.log(data[i].city)
        }
    }

    searchBar.addEventListener("change", check);   
    }

    
    
} 

seekInfo();