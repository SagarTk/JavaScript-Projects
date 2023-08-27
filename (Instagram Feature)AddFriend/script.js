const istatus = document.querySelector(".status")
const btn = document.querySelector(".btn")
let flag = 0 ;

btn.addEventListener("click" , ()=>{

    if(flag == 0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn.innerHTML = "Unfollow"
        btn.style.backgroundColor = "crimson"
        flag=1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "crimson"
        btn.innerHTML = "Follow"
        btn.style.backgroundColor = "rgb(37, 188, 37)"
        flag=0
    }
})