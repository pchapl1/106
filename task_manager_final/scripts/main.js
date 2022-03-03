let nonImportantClass = 'far fa-star'
let ImportantClass = 'fas fa-star'
let isImportant = false
let formShowing = false


function toggleImportant(){
    console.log('clicked')
    if (isImportant){
        isImportant = false
        $('#important').removeClass(ImportantClass)
        $('#important').addClass(nonImportantClass)

    }else{
        $('#important').removeClass(nonImportantClass)
        $('#important').addClass(ImportantClass)
        isImportant = true

    }
}

function toggleForm(){
    if (formShowing){
        $('#toggle-form').html('add task')
        console.log('form function')
        $('#form-div').hide()
        formShowing = false
    }else{
        $('#toggle-form').html('hide form')
        console.log('form hide')
        $('#form-div').show()
        formShowing= true

    }
}


function displayTask(task){

    let syntax = `<div class="task">
        <div class="task-header">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <div class="task-body">
            <label class="date">Due Date: ${task.dueDate}</label>
            <label class="date">Task Location: ${task.location}</label>
            <label class="date">Contact info: ${task.contact}</label>
        </div>
        <div class="rmv-task-btn">
            <button onclick="this.parentNode.parentNode.remove()" class="btn btn-danger float-right">Remove</button>
        </div>

    </div>
    `

    $('#task-list').append(syntax)
}

function clearForm(){
    $('#txtTitle').val("") 
    $('#selDueDate').val("")
    $('#txtContact').val("")
    $('#txtLocation').val("")
    $('#txtDescription').val("")
    $('#txtColor').val("#000000")
}

function saveTask(e){
    e.preventDefault()
    console.log('saving task...')
    let title = $('#txtTitle').val()
    let dueDate = $('#selDueDate').val()
    let contact = $('#txtContact').val()
    let location = $('#txtLocation').val()
    let description = $('#txtDescription').val()
    let color = $('#txtColor').val()

    if(title.length < 4) {
        alert('title should be at least 5 chars long')
        return;
    }
    if (!dueDate) {
        alert('due date is required')
        return;
    }
    if (!contact) {
        alert('contact is required')
        return;
    }
    if (!location) {
        alert('location is required')
        return;
    }
    if (!description) {
        alert('description is required')
        return;
    }
    if (!color) {
        alert('color is required')
        return;
    }
    task = new Task(title, isImportant, dueDate, location, contact, description, color)
    let data = JSON.stringify(task)
    $.ajax({
        type: 'POST', 
        url: 'https://fsdiapi.azurewebsites.net/api/tasks/',
        data: data,
        contentType: 'application/json',
        success: function(data){
            console.log('success: ', data)
            displayTask(task)

        },
        error: function(error){
            console.log("error: ", error)
        },
    })

    formShowing = false;
    $('#toggle-form').html('add task')
    $('#form-div').hide()
    // displayTask(task)

    clearForm()
}


function deleteTask(){
    console.log('deleting')
}

function retrieveTasks(){

    $.ajax({
        type: 'GET',
        url: 'https://fsdiapi.azurewebsites.net/api/tasks',
        success: (function(data){
            let list = JSON.parse(data)
            for (i = 0; i<list.length;i++){
                let task = list[i]
                if (task.name == 'pchap'){
                    displayTask(task)
                }
            }
        }),
        error: (function(error){
            console.log('get request Error: ', error)
        })
        
    })

}


function init(){
//events
$('#important').click(toggleImportant)
$('#toggle-form').click(toggleForm)
$('#btnSave').click(saveTask)
// testRequest()
retrieveTasks()

}

window.onload = init;