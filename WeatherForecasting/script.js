const container = document.querySelector(".container")
const weather = document.querySelector(".weather")
const weather1 = document.querySelector(".weather1")
const city = document.querySelector(".location")
const dayTime = document.querySelector(".day_time")
const icon = document.querySelector(".icon")
const condition = document.querySelector(".condition")
const btn = document.querySelector("#btn")
const input = document.querySelector("#input")
const image = document.querySelector("#image")


btn.onclick = () => {
    
    const fetchData = async() => {
        
        let target = input.value
        const url = `http://api.weatherapi.com/v1/current.json?key=5b6177fd87f44a9f96183014230607&q=${target}`
        
        const response = await fetch(url)
        const data = await response.json()
        
        const cityName = data.location.name ;
        const time = data.location.localtime 
        const temperature = data.current.temp_c ;
        const desc = data.current.condition.text ;
        const emoji = data.current.condition.icon ;
        
        city.innerText = target
        weather1.innerText = data.current.temp_c+"°"
        dayTime.innerText = time
        image.src = emoji
        condition.innerText = desc
    }
    fetchData()
}

// fetchData()
