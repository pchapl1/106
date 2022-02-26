let nonImportantClass = 'far fa-star'
let ImportantClass = 'fas fa-star'
let isImportant = false
let formShowing = true

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
        $('#toggle-form').html('show form')
        console.log('form function')
        $('form').hide()
        formShowing = false
    }else{
        $('#toggle-form').html('hide form')
        console.log('form function')
        console.log()
        $('form').show()
        formShowing= true


    }
}


function init(){
//events
$('#important').click(toggleImportant)
$('#toggle-form').click(toggleForm)

//load data
// $('#form').hide()


}

window.onload = init;