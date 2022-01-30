

function currentDay() {
  setInterval(() => {
    document.getElementById("currentDay").textContent = moment().format(
      "dddd, MMMM Do YYYY, h:mm:ss a"
    );
  }, 1000);
}

function localSave(e) {
  console.log(typeof $(e.target).parent()[0].previousElementSibling.value);
  console.log(typeof $(e.target).parent()[0].previousElementSibling.id);
  var value = $(e.target).parent()[0].previousElementSibling.value;
  var id = $(e.target).parent()[0].previousElementSibling.id;
  localStorage.setItem(id, value);
}

function pullingLS() {
  var localArray = Object.entries(localStorage);
  localArray.forEach((element) => {
    console.log(element[0], element[1]);
    document.getElementById(element[0]).innerHTML = element[1];
  });
}

pullingLS();
currentDay();

function sum(x, y) {
  return x + y;
}

sum(4, 5);

