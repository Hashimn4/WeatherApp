let h1 = document.querySelector('.name');
let h2 = document.querySelector('.desc');
let h3 = document.querySelector('.temp');
let button = document.querySelector('.btn');
let search = document.getElementById("search_city");
let li;
let l2;
let l3;
let image = document.querySelector('.image');
let img = document.createElement("img");
let div = document.querySelector('.card');

button.addEventListener('click', () => {
    console.log(search.value);
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + search.value + '&appid=2ef63409c26db0c35577b6754e514bb6')
    .then(res => res.json())
    .then(data => {
        li = data[0].lat;
        l2 = data[0].lon;
        l3 = data[0].name + ", " + data[0].country;
        console.log(l3);
        fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + li + '&lon=' + l2 + '&appid=2ef63409c26db0c35577b6754e514bb6').then(res => res.json()).then(resu => {
            console.log(resu);
            h2.innerHTML = resu.weather[0].main;
            h3.innerHTML = Math.trunc(resu.main.temp) + '&deg;F';
            img.src = 'http://openweathermap.org/img/wn/' + resu.weather[0].icon + '@2x.png';
            image.appendChild(img);
            if(resu.weather[0].icon.includes('d')) {
                div.style.backgroundColor = '#9DF3ED';
                div.style.color = 'black'
            }
            else if(resu.weather[0].icon.includes('n')) {
                div.style.backgroundColor = '#869796';
                div.style.color = 'white';
            }
        })
    })})
