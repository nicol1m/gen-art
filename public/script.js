const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

redSlider.addEventListener('input', draw);
greenSlider.addEventListener('input', draw);
blueSlider.addEventListener('input', draw);

function draw() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  
  ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  
  for (let x = 0; x < canvas.width; x += 10) {
    for (let y = 0; y < canvas.height; y += 10) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, 10, 10);
      }
    }
  }
}
