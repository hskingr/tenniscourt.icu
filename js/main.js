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
console.log("width: " + screenWidthX + " height: " + screenHeightY)

//setting size of svg here
document.getElementById('tennis-court-image').setAttribute("height", "49074");
document.getElementById('tennis-court-image').setAttribute("width", "89856");



//get image width and height
let imageWidth = document.getElementById("tennis-court-image").width
let imageHeight = document.getElementById("tennis-court-image").height
//get width of image divided by 122
let xMove = Math.round(document.getElementById("tennis-court-image").width / screenWidthX)
//get height of image divided by 51
let yMove = Math.round(document.getElementById("tennis-court-image").height / screenHeightY)
console.log(xMove + " : " + yMove)
console.log("image size: " + imageWidth + " x " + imageHeight)
let addX = 0
let addY = 0

let intervalTime = 100
let myVar = setInterval(checkImageLoaded, intervalTime);
let timeToComplete = (intervalTime * (122 * 51)) / 100
let timeMinutes = timeToComplete / 60
console.log(timeMinutes)

function scrollAuto() {
  timeToComplete -= 0.1
  timeMinutes = Math.floor(timeToComplete / 60)

  document.getElementById('counter').innerHTML = '⇨ time to complete: ' + timeMinutes + ' minutes and ' + Math.floor(timeToComplete % 60) + '<br> seconds'
  addX += screenWidthX
  if (addX > imageWidth) {
    addY += screenHeightY
    document.getElementById('counter').innerHTML = '↩ <br> next row ↩ <br> next row ↩ <br> next row ↩ <br> next row'
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