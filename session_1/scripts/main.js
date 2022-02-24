
function loadData(){
    console.log*'loading data from server!!'
}

function sayHello(name) {
    console.log('hi there, ' + name)
}


function sum(a, b) {
    return a + b
}

function testValidation(){
    let num = 9;
    if (num < 10){
        console.log('Error, number too low')
        return;
    }
    console.log('saved!')
}

function print0to20(){
    for (let x = 0; x < 21; x++ ){
        if (x != 7 && x != 13){
            console.log(x)
        }
    }
}

function sumArray(){
    let total=0;

    let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];
    let largestNum = list[0]
    let smallestNum = list[0]
    for (x = 0; x<list.length; x++){
        total += list[x]
        if (list[x] > largestNum){
            largestNum = list[x]
        }
        if (list[x] < smallestNum){
            smallestNum = list[x]
        }
    }
    console.log(total)
    console.log(largestNum)
    console.log(smallestNum)
}

function init() {
    console.log('dom ready')

    // catch events

    // load previous data
    loadData();
    sayHello('steve')
    testValidation()

    let res = sum(21,21)
    console.log(res)
    print0to20()
    sumArray()
}

window.onload = init();