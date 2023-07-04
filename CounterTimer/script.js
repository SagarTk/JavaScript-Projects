const sec = 1000
const min = 60*sec
const hr = 60*min
const day = 24*hr

const input = document.querySelector("#pickDate")
const btn = document.querySelector("#btn")

btn.onclick = (e) => {
    const x = input.value
    
    if(x == "")
    {
        alert("Select a valid date")
    }
    else
    {
        const dateContainer = document.querySelector(".dateContainer")
        dateContainer.remove()

        const date = x.slice(8)
        const month = x.slice(5,7)
        const year = x.slice(0,4)
        const nx = month + "/" + date + "/" + year
        
        const comingDate = new Date(nx).getTime()
        
        const intervalId = setInterval( () => {
            
            const todayDate = new Date().getTime()
            const diff = comingDate - todayDate
            
            const dd = Math.floor(diff / day)
            const dh = Math.floor((diff % day) / hr)
            const dm = Math.floor((diff % hr) / min)
            const ds = Math.floor((diff % min) / sec)
            
            const remDiv = document.querySelector("div")
            remDiv.setAttribute("class" , "container")
            
            remDiv.innerHTML = `
            <h1 id="remTime">REMAINING TIME</h1>
            <div class="counterTimer">
            <p> <span class="days"> ${dd} </span> Days </p>
            <p> <span class="hours"> ${dh} </span> Hours </p>
            <p> <span class="minutes"> ${dm} </span> Minutes </p>
            <p> <span class="seconds"> ${ds} </span> Seconds </p>
            </div>
            `
    
            if(diff < 0)
            {
                remTime.innerText = "TIME IS UP"
                document.querySelector(".counterTimer").style.display = "none"
                clearInterval(intervalId)
            }
            
        } , 1000)
    }
    
}