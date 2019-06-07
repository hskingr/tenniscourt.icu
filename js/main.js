let x = chance.integer({
  min: 0,
  max: 80000
})
let y = chance.integer({
  min: 0,
  max: 80000
})

//get widht and height of visible screen
//this changes due to different screen sizes
let screenWidthX = document.getElementById("fitBox").clientWidth
let screenHeightY = document.getElementById("fitBox").clientHeight
let desiredImageWidth = 49074
let desiredImageHeight = 49074
console.log("screen width: " + screenWidthX + "screen height: " + screenHeightY)

//setting size of svg here
document.getElementById('tennis-court-image').setAttribute("height", desiredImageWidth / 5);
document.getElementById('tennis-court-image').setAttribute("width", desiredImageHeight / 5);



//get image width and height
let imageWidth = document.getElementById("tennis-court-image").width
let imageHeight = document.getElementById("tennis-court-image").height
//get width of image divided by screen width
let xMove = Math.round(imageWidth / screenWidthX)
//get height of image divided by screen height
let yMove = Math.round(imageHeight / screenHeightY)
console.log("x and y sections to move across: " + xMove + " : " + yMove)
console.log("image size: " + imageWidth + " x " + imageHeight)
let addX = 0
let addY = 0

let intervalTime = 200
let howManyIntervalsInASecond = 1000 / intervalTime
let timer = setInterval(changeTimer, 1000)
let myVar = setInterval(checkImageLoaded, intervalTime);
let timeToComplete = ((xMove * yMove)) / howManyIntervalsInASecond
let timeMinutes = timeToComplete / 60
let passesCount = ''
console.log("time to complete in seconds: " + timeToComplete)

function changeTimer() {
  if (timeToComplete == 0) {
    //timer and scroll functions not completely in sync
    console.log('zero')
    document.getElementById('counter').innerHTML = "restart"
    passesCount = ''
    timeToComplete = ((xMove * yMove)) / howManyIntervalsInASecond
    addX = 0
    addY = 0
  }
  timeToComplete -= 1
  timeMinutes = Math.floor(timeToComplete / 60)
  document.getElementById('counter').innerHTML = '⇨ time to complete movement: ' + timeMinutes + ' minutes and ' + Math.floor(timeToComplete % 60) + '<br> seconds ' + passesCount
}

function scrollAuto() {

  addX += screenWidthX
  if (addX > imageWidth) {
    addY += screenHeightY
    passesCount += '↩  '
    addX = 0
  } else if (addY > imageHeight) {
    addY = 0
    addX = 0

  }
  window.scroll({
    top: addY,
    left: addX,
    behavior: 'auto'
  });

}

// TITLE SCROLL
msg = "A Diagram of a Tennis Court at a Scale of 1:1 ";
position = 0;

function scrolltitle() {
  document.title = msg.substring(position, msg.length) + msg.substring(0, position);
  position++;
  if (position > msg.length) position = 0
  window.setTimeout("scrolltitle()", 170);
}
scrolltitle();


window.addEventListener('scroll', function() {});
// body.ontouchend = (e) => {
//   e.preventDefault();
// };

window.onbeforeunload = function() {
  window.scroll(0, 0)
}

function checkImageLoaded() {
  if (document.getElementById("tennis-court-image").complete == true) {
    scrollAuto()
  } else {
    console.log('false')
  }
}