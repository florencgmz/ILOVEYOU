const density = " !=+-.%";

let video;
let asciiDiv;
const maxStep = 10;
const minFontSize = 6;
const maxFontSize = minFontSize*maxStep;
let playing = true;

function setup() {
  noCanvas();
  video = createVideo("../assets/1.mp4");
  video.size(500, 100);
  asciiDiv = createDiv();
  video.loop();
}

function draw() {
  video.loadPixels();
  video.hide();
  let asciiImage = "";
  const stepSize = floor(map(0, 0, windowWidth, 1,maxStep));
  for (let j = 0; j < video.height; j=j+stepSize) {
    for (let i = 0; i < video.width; i=i+stepSize) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = getGrayScaleColor(r,g,b);
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, 11));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  const pointSize = map(stepSize,1 , maxStep, minFontSize, maxFontSize);
  const lineHeightSize = pointSize * 1.25;
  asciiDiv.style('font-size', '12pt');
  asciiDiv.style('line-height', '10pt');
  asciiDiv.html(asciiImage);
  asciiDiv.parent("ascii");
}

function getGrayScaleColor(r, g, b) {
  return 0.1 * r + 0.7 * g + 0.05 * b;
}