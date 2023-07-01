const addTaskBtn = document.getElementById("AddTask");
const BtnText = addTaskBtn.innerText ;
const UserTaskField = document.getElementById("UserContent");
const record = document.getElementById("display-task");
let edit_id = null ;

let userArray = [] ;

let str = localStorage.getItem('task') ;
if(str != null){
    userArray = JSON.parse(str) ;
}

displayTask();

addTaskBtn.onclick = () => {
    const name = UserTaskField.value ;
    if(edit_id != null)
    {
        userArray.splice(edit_id , 1 , {'task' : name}) ;
        edit_id = null ;
    }
    else
    {
        if(name != "")
        {
            userArray.push({'task' : name}) ;
        }
    }
    saveTask(userArray) ;
    displayTask();
    UserTaskField.value = "" ;
    addTaskBtn.innerText = BtnText ;
}

function saveTask(userArray)
{
    localStorage.setItem('task' , JSON.stringify(userArray)) ;
    displayTask() ;
}

function displayTask()
{
    let statement = "" ;

    userArray.forEach((element , id) => {
        statement += 
        `<tr>
            <th scope="row">${id+1}.</th>
            <td>${element.task}</td>
            <td> 
                <i onclick="EditTask(${id})" class="btn text-white fa fa-edit btn-info mx-3"></i>  
                <i onclick="deleteTask(${id})" class="btn btn-danger text-white fa fa-trash-o"></i>
            </td>
        </tr>
        `
    });
    record.innerHTML = statement ;
}

function EditTask(id)
{
    edit_id = id ;
    UserTaskField.value = userArray[id].task ;
    addTaskBtn.innerText = 'Save Changes';
}

function deleteTask(id)
{
    userArray.splice(id,1) ;
    saveTask(userArray) ;
}

const alltr = document.querySelectorAll("#display-task tr") ;
const search_field = document.getElementById("search") ;

search_field.addEventListener("input" , function(e){

    const search_str = e.target.value.toLowerCase() ;
    record.innerHTML = "" ;
    
    alltr.forEach((el) => {
        const td_in_tr = el.querySelectorAll("td")
        let str = td_in_tr[0].innerText.toLowerCase() ;
        let result = str.includes(search_str) ;

        if(result)
        {
            record.appendChild(el) ;
        }
    });
})

