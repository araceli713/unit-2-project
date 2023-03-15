/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title")
let storyOpening = document.querySelector(".story-opening")
let buttons = document.querySelector(".buttons")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector("option-two-screen")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")


optionOne.onclick=function (){
  optionOneScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
}

optionTwo.onclick=function (){
  optionTwoScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
}

optionOneEnd.onclick=function (){
  optionThreeScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
}

optionTwoEnd.onclick=function (){
  optionFourScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
}


