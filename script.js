const productBTN = document.querySelector("#btn1")
const sizeBTN = document.querySelector("#btn2")
const powerBTN = document.querySelector("#btn3")
const memBTN = document.querySelector("#btn4")
const priceBTN = document.querySelector("#btn5")

const qboxDiv = document.querySelector("#qbox")
const productDiv = document.querySelector("#question1")
const sizeDiv = document.querySelector("#question2")
const powerDiv = document.querySelector("#question3")
const memDiv = document.querySelector("#question4")
const priceDiv = document.querySelector("#question5")

let divs=[qboxDiv,productDiv,sizeDiv,powerDiv,memDiv,priceDiv]
let location=0
let answers={}

productBTN.onclick=next
sizeBTN.onclick=next
powerBTN.onclick=next
memBTN.onclick=next

function next(e){
//console.log(e)
//push through the divs array using location and checking answers value 😁👌🏼👌🏼👌🏼
if (answers.type && answers.type==watch){
    location+=2
}else{
    location++
}
}