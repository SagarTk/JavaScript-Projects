const image = document.querySelector("img")
const like = document.querySelector("i")

image.addEventListener("dblclick" , ()=>{
    like.style.transform = "translate(-50% , -50%) scale(1)"
    like.style.opacity = 0.8
    setTimeout(()=>{
        like.style.opacity = 0;
    } , 2000)
})
