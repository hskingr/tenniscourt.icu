let x = chance.integer({
  min: 0,
  max: 80000
})
let y = chance.integer({
  min: 0,
  max: 80000
})
let screenWidthX = document.getElementById("fitBox").clientWidth
let screenHeightY = document.getElementById("fitBox").clientHeight
console.log("width: " + screenWidthX + " height: " + screenHeightY)
window.onbeforeunload = function() {
  window.scroll(0, 0)
}
// document.getElementById('mainTextBox').style.width = (screenWidthX / 2) + 'px'
// document.getElementById('mainTextBox').style.height = (screenHeightY / 1.2) + 'px'
// document.getElementById('mainTextBox').style.left = screenWidthX/4 + 'px'
// document.getElementById('mainTextBox').style.top = 10 + 'px'

//get image width and height
let imageWidth = document.getElementById("tennis-court-image").clientWidth
let imageHeight = document.getElementById("tennis-court-image").clientHeight
//get width of image divided by 122
let xMove = Math.round(document.getElementById("tennis-court-image").clientWidth / 122)
//get height of image divided by 51
let yMove = Math.round(document.getElementById("tennis-court-image").clientHeight / 51)
console.log(xMove + " : " + yMove)
console.log("image size: " + imageWidth + " x " + imageHeight)
let addX = 0
let addY = 0


let myVar = setInterval(scrollAuto, 1000);

function scrollAuto() {

  addX += xMove
  console.log(addX)
  if (addX > imageWidth) {
    addY += yMove
    addX = 0
  } else if (addY == (yMove * 51)) {
    addY = 0
    addX = 0
  }

  window.scroll({
    top: addY,
    left: addX,
    behavior: 'smooth'
  });


  // document.getElementById('mainTextBox').style.left = window.scrollX + (screenWidthX / 4) + 'px'
  // document.getElementById('mainTextBox').style.top = window.scrollY + (screenHeightY / 4) + 'px'
}
window.addEventListener('scroll', function() {});
// body.ontouchend = (e) => {
//   e.preventDefault();
// };