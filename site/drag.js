// "borrowed" from https://codepen.io/marcusparsons/pen/NMyzgR
function makeDraggable(element) {
  let currentPosX = 0,
    currentPosY = 0,
    previousPosX = 0,
    previousPosY = 0;

  if (element.querySelector(".title-bar")) {
    element.querySelector(".title-bar").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    previousPosX = e.clientX;
    previousPosY = e.clientY;
    //When the mouse is let go, call the closing event
    document.onmouseup = closeDragElement;
    //call a function whenever the cursor moves
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    currentPosX = previousPosX - e.clientX;
    currentPosY = previousPosY - e.clientY;
    previousPosX = e.clientX;
    previousPosY = e.clientY;
    element.style.top = element.offsetTop - currentPosY + "px";
    element.style.left = element.offsetLeft - currentPosX + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
