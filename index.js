

async function joketeller(){

let jokeApi = await fetch('https://official-joke-api.appspot.com/random_joke');
let joke = await jokeApi.json();

document.querySelector('div').innerHTML=`<p style="text-align: center;">${joke.setup}<p/><p style="text-align: center;">${joke.punchline}</p>`;



}

