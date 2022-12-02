const canvas = document.querySelector('#drawingKwiatek');

canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

const kwiatek = document.createElement('img')

kwiatek.src = 'obrazki/kwiatek.png';

let paintbrush = kwiatek;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
  const left = event.offsetX - 100;
  const top = event.offsetY - 100;

  context.drawImage(paintbrush, left, top, 200, 200);

}

const clear = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

context.clearRect(0, 0, canvas.width, canvas.height);

const handleResize = () => {
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;
}

canvas.addEventListener('click', clear);

canvas.addEventListener('mousemove', handleMouseMove);

window.addEventListener('resize' , handleResize);


// function quit() {
//   canvas.removeEventListener('mousemove', handleMouseMove)
// }