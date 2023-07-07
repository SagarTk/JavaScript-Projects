const container = document.querySelector(".container")
const weather1 = document.querySelector(".weather1")
const city = document.querySelector(".location")
const dayTime = document.querySelector(".day_time")
const icon = document.querySelector(".icon")
const condition = document.querySelector(".condition")
const btn = document.querySelector("#btn")
const input = document.querySelector("#input")
const image = document.querySelector("#image")


btn.onclick = () => {
    
    let target = input.value
    
    const fetchData = async() => {
        
        if(target == "")
        {
            alert("Enter Valid Location")
        }
        else
        {
            const url = `http://api.weatherapi.com/v1/current.json?key=5b6177fd87f44a9f96183014230607&q=${target}`
            
            const response = await fetch(url)
            const data = await response.json()
            
            const cityName = data.location.name ;
            const time = data.location.localtime 
            const temperature = data.current.temp_c ;
            const desc = data.current.condition.text ;
            const emoji = data.current.condition.icon ;
            
            const x = container.children[1]
            x.setAttribute("class" , "weather")
            
            const weather = document.querySelector(".weather")
        
            weather.innerHTML = `
               
                <div class="weather1">${data.current.temp_c+"°"}</div>
    
                <div class="weather2">
                    <p class="location">${target}</p>
                    <span class="day_time">${time}</span>
                </div>
                
                <div class="weather3">
                    <p class="icon">
                        <img id="image" src="${emoji}" alt="">
                    </p>
                    <span class="condition">${desc}</span>
                </div>
            
            `
            
        }
    }
    fetchData()
}
