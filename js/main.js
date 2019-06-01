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


//get image width and height
let imageWidth = document.getElementById("tennis-court-image").clientWidth
let imageHeight = document.getElementById("tennis-court-image").clientHeight
//get width of image divided by 122
let xMove = Math.round(document.getElementById("tennis-court-image").width / 122)
//get height of image divided by 51
let yMove = Math.round(document.getElementById("tennis-court-image").height / 51)
console.log(xMove + " : " + yMove)
console.log("image size: " + imageWidth + " x " + imageHeight)
let addX = 0
let addY = 0


let myVar = setInterval(checkImageLoaded, 300);

function scrollAuto() {

  addX += xMove
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