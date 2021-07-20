// document.getElementById("count-el").innerText = 5

//let count = 5 + 7

//console.log(count)

//let myAge = 32

//let humanDogRatio = 7

//let myDogAge = myAge * humanDogRatio

//console.log (myDogAge)

//let bonusPoints = 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints = 45
//console.log(bonusPoints)

//function increment() {
    //console.log("the button was clicked")
//}

//function countdown() {
    //console.log(5)
    //console.log(4)
   // console.log(3)
   // console.log(2)
   // console.log(1)
//}
//countdown()


//function myLogger() {
    //console.log(42)
//}
//myLogger()

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function logLapTime() {
    //let totalTime = lap1 + lap2 + lap3
    //console.log(lap1 + lap2 + lap3)
//}
//logLapTime()

//let lapsCompleted = 0
//function incrementLap() {
    //lapsCompleted = lapsCompleted + 1
//}
//incrementLap()
//incrementLap()
//incrementLap()

//console.log(lapsCompleted)


let countEl= document.getElementById ("count-el") // pass in arguments
console.log(countEl)

let count=0
console.log(count)

function increment () {
    //console.log("clicked")
    count= count + 1
    countEl.innerText = count
    console.log(count)
}

// Create a function, save (), which logs out the count when it's called


function save() {
    console.log(count)
}