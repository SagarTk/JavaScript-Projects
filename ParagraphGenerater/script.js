const input = document.getElementById("now")
const container = document.querySelector(".container")

const getWord = (n) => {
    const str = "abcdefghijklmnopqrstuvwxyz" ;
    let text="" ;
    for(let i=0 ; i<n ; i++)
    {
        text += str[(Math.random()*25).toFixed(0)] ;
    }
    return text ;
}

let getData = () => {
    let str=""
    const noOfWords = input.value ;
    if(noOfWords > 0)
    {
        for(let i=0 ; i<noOfWords ; i++)
        {
            str += getWord((Math.random()*15).toFixed(0)) + " ";
        }
    
        const para = document.createElement("p") 
        para.setAttribute("class" , "myPara")
        para.innerText = str
        container.append(para)
    }
    else  alert("Please enter positive value")
}

