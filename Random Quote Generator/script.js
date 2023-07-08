const container = document.querySelector(".container")
const quote = document.querySelector(".quote")
const desc = document.querySelector("#content")
const author = document.querySelector("#author")
const btn = document.querySelector("#btn")
const url = `https://api.quotable.io/quotes/random`

async function fetchData(url){

    const response = await fetch(url)
    const data = await response.json()

    const x = data[0]
    
    const quoteData = x.content
    const authorName = x.author
    
    desc.innerText = quoteData
    author.innerText = "~ "+authorName
}

btn.onclick = () => {
    fetchData(url)
}
fetchData(url)


