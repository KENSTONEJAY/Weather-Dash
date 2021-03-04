class Fetch {
  async getCurrent(input) {
    const myKey = "e9e011068bfe9e81e9e7e94ed54c0603";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}


const ft = new Fetch();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
      console.log(data)
      $('.card-title').text(data.name)
      $('.card-subtitle').text(data.main.temp)
      $('.card-text').text(data.wind.speed)
      $('.card-label').text(data.main.humidity)
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {

});





// name of the city 
// wind speed
// temp
// uv index 
// date
// humidity


