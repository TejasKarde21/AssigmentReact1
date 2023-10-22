const search = document.getElementById("search");
const value = document.getElementById("input");
const temp = document.getElementById("temp");
const city1 = document.getElementById("city1");
const humi = document.getElementById("humid");
const wind = document.getElementById("wind");
const image = document.getElementById("images");
const diplay = document.querySelector(".weather");


search.addEventListener("click",async(e)=>{
    e.preventDefault();
    let searchValue = value.value;
    const apikey = "0e8ee9d1d7cc5e280d4a60b1bbc08d04";

const uri = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}&appid=${apikey}`;
    console.log(value.value);

    try{
        const response = await fetch(uri);
        const data = await response.json();
     
   
      //   .weather{
      //     display: none;
      // }
        temp.innerText =Math.round(data.main.temp) +"°C";
        city1.innerText=data.name;
        humi.innerText=data.main.humidity+ "%";
        wind.innerText=data.wind.speed + "km/h";

      if(data.weather[0].main == "Clouds"){
        image.src = "clouds.png";
      }
      else if(data.weather[0].main == "Clear"){
        images.src = "clear.png";
      }
      else if(data.weather[0].main == "Rain"){
        image.src="rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
              image.src="drizzle.png"
      }
      else if(data.weather[0].main == "Mist"){
        image.src="mist.png"
}



         // Clear the search input
         value.value = '';    
    }
catch(error){
    console.error('Error:', error);
} 
});


