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
  window.scroll(x, y)
}
// document.getElementById('mainTextBox').style.width = (screenWidthX / 2) + 'px'
// document.getElementById('mainTextBox').style.height = (screenHeightY / 1.2) + 'px'
// document.getElementById('mainTextBox').style.left = screenWidthX/4 + 'px'
// document.getElementById('mainTextBox').style.top = 10 + 'px'


let myVar = setInterval(scrollAuto, 1000);

function scrollAuto() {
  let prevX = x
  let prevY = y
  x = chance.integer({
    min: prevX - 2000,
    max: prevX + 2000
  })
  y = chance.integer({
    min: prevY - 2000,
    max: prevY + 2000
  })
  window.scroll({
    top: y,
    left: x,
    behavior: 'smooth'
  });


  // document.getElementById('mainTextBox').style.left = window.scrollX + (screenWidthX / 4) + 'px'
  // document.getElementById('mainTextBox').style.top = window.scrollY + (screenHeightY / 4) + 'px'
}
window.addEventListener('scroll', function() {});
// body.ontouchend = (e) => {
//   e.preventDefault();
// };
