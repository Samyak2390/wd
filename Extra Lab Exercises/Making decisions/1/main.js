var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
    var choice = select.value;
    
    if(choice === 'sunny'){
        para.textContent = "Sunny Outside";
    }
    else if(choice === 'rainy'){
        para.textContent = 'Rainy outside. Take Umbrella';
    }
    else if(choice === 'snowing'){
        para.textContent = 'Outside the snow is coming down.\n But somehow, I can\'t seem to find <br>the quiet inside my mind.'
    }
    else{
        para.textContent = "";
    }
}