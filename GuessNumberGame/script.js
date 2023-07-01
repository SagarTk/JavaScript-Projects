function guess_function() {

    let rand_no = Math.floor(Math.random() * 100) + 1;
    let user_no1 = document.getElementById("guess-box").value;
    
    if (user_no1 < 1 || user_no1 > 100) {
        message3.textContent = "Enter Valid Input" ;
    }
    else{
        if (rand_no === user_no1) {
            message2.textContent = "Actual No. : " + rand_no ;
            message3.textContent = "Corrrect Guess" ;
        }
        else if (rand_no > user_no1) {
            message2.textContent = "Actual No. : " + rand_no ;
            message3.textContent = "Guess Bigger" ;
        }
        else if (rand_no < user_no1){
            message2.textContent = "Actual No. : " + rand_no ;
            message3.textContent = "Guess Lower" ;
        }
    }
    
}