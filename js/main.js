function countDate(date2, date1) {
  let difference = date2.getTime() - date1.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
}

var startDate = new Date("2021-07-09")
var currentDate = new Date()
var remoteDate = new Date("2022-05-16")

var loveDate = countDate(currentDate, startDate)
document.querySelector("#count-date").innerHTML = `${loveDate} (days)`