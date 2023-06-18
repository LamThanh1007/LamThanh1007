var waitingAnh = document.getElementById('waitinglove'),
  context = waitingAnh.getContext('2d');

make_background();
resizeReset();


var totalWaitingDays = countDate(currentDate, remoteDate)
var waitingDays = countDate(currentDate, startDate)
var remainingDay = totalWaitingDays - waitingDays

function resizeReset() {
  w = waitingAnh.width = window.innerWidth;
  h = waitingAnh.height = 300;
}

var maxW = w - 200
var currentPosition = (remainingDay / totalWaitingDays) * maxW;

function make_background()
{
  // planeImage = new Image();
  // planeImage.src = 'img/waiting/plane.png';
  // planeImage.onload = function(){
  //   context.drawImage(planeImage, currentPosition, 1, 200, 100);
  // }


  japanImage = new Image();
  japanImage.src = 'img/waiting/japan.png';
  japanImage.onload = function(){
    context.drawImage(japanImage, w - 200, 100, 200, 100);
  }

  vietnamImage = new Image();
  vietnamImage.src = 'img/waiting/vietnam.png';
  vietnamImage.onload = function(){
    context.drawImage(vietnamImage, 0, 100, 200, 100);
  }
}

var words = ['Chờ êm tu thành chính quả bí kíp võ công Nhật ngữ rồi êm sang nhá. Yêu anh.... '],
  part,
  wordIndex = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[wordIndex].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        wordIndex++;
        offset = 0;
        if (wordIndex >= len) {
          wordIndex = 0;
        }
      }
    }
    part = words[wordIndex].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.waitinglove-text').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});