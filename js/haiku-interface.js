import { Haiku } from './../js/haiku.js';

$(document).ready(function(){
  $("#check-poem").submit(function(e){
    e.preventDefault();

    const poemInput = $("#poem").val()
    let haiku = new Haiku();
    let syllCount = [];

    const filteredPoem = haiku.inputFilter(poemInput);

    if (haiku.lineCheck(filteredPoem)) {
      let lines = poemInput.split("\n");
      let line1 = haiku.lineCount(lines[0]);
      let line2 = haiku.lineCount(lines[1]);
      let line3 = haiku.lineCount(lines[2]);
      syllCount.push(line1, line2, line3);
    }

    if (syllCount.toString() === [5, 7, 5].toString()) {
      $(".final-result").text("Your poem is a valid Haiku!");
    } else {
      $(".final-result").text("Your poem is not a valid Haiku.");
    }
  });
});
