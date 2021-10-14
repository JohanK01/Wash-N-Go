'use strict';

let BookBtn = document.createElement('button');
BookBtn.textContent = "Book now";
BookBtn.id = "bkBtn";
BookBtn.display = "none";


document.getElementById('date').appendChild(BookBtn)
function myFunction() {
    var x = document.getElementById("date");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function dateFunction() {
    var y = document.getElementById("bkBtn");
    document.getElementById("date").style.color = "red";
    if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    }
  