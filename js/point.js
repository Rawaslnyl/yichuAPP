var point = document.querySelector('.point');
point.onclick = function() {
  console.log(point.style.color);
  var val = document.querySelector('.dianji').innerText;
  var dianji = document.querySelector('.dianji');
  console.log(val);
  num = dianji.innerText * 1;
  if (point.style.color === 'rgb(0, 0, 0)') {
    this.style.color = 'red';
    dianji.innerText = num + 1;
  } else {
    dianji.innerText = num - 1;
    this.style.color = 'rgb(0, 0, 0)';
  }
};
