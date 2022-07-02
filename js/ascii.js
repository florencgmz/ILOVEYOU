const density = "!@#W$9876543210?!abc;:+=-,._                    ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createVideo("../assets/1.mp4");
  video.size(90, 80);
  video.play();
  video.loop();
<<<<<<< HEAD
  video.volume(0);
=======
>>>>>>> b382f9b2d23e1209a06ad3411b1fb54e36c53b73
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  video.hide();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
  //asciiDiv.parent("ascii");
}
