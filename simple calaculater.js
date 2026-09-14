var choice = prompt("welcome to the are calculater. \n please ente your choise area of. \n1 rectangle \n2 triangle \n3 square")

if(choice = 1){
    var f = prompt("enter lenght")
    var b = prompt("enter width")
    var result = Number(f) * Number(b)
    alert("the area is :" + result)
}

if(choice = 2){
    var h = prompt("enter height")
    var b = prompt("enter base ")
    var result = Number(b) * Number(h)/2 
    alert("the area is :" + result)
}
if(choice = 3){
    var h = prompt("enter lenght")
    var result = Number(h) * Number(h)
    alert("the area is :" + result)
}