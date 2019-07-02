// console.log(5);
var a = 0,
  b = 0,
  op = "+",
  res = 0;
let resTable = [];
var readPosition = 0;
// readPosition = 0 : read a
// readPosition = 1 : read b
// readPosition = 2 : disable
function addToA(n) {
  a = a * 10 + n;
}

function addToB(n) {
  b = b * 10 + n;
}

function updateScreen() {
  if (op == "+") {
    res = a + b;
  } else if (op == "-") {
    res = a - b;
  } else if (op == "*") {
    res = a * b;
  } else if (op == "/") {
    res = a / b;
  } else if (op == "%") {
    res = a % b;
  }
  //console.log("a = ",a);
  //console.log("b = ",b);
  //console.log("res = ",res);
  //console.log("");
  // readPosition
  if (readPosition == 0) {
    document.getElementById("input").innerHTML = a;
  } else if (readPosition == 1) {
    document.getElementById("input").innerHTML = a + " " + op + " " + b;
  } else if (readPosition == 2) {
    document.getElementById("input").innerHTML =
      a + " " + op + " " + b + "=" + res;
    console.log(a, op, b, "=", res);
  }
  //document.getElementById("#input").innerHTML =  ; /////
}

function readFromScreen(n) {
  if (readPosition == 0) {
    addToA(n);
  } else {
    addToB(n);
  }
  updateScreen();
}

function reset() {
  readPosition = 0;
  a = res;
  b = 0;
  op = 1;
  updateScreen();
}

function switchVariable(n) {
  //1 +
  //2 -
  //3 *
  //4 /
  if (n == 1) {
    op = "+";
    readPosition = 1;
  } else if (n == 2) {
    op = "-";
    readPosition = 1;
  } else if (n == 3) {
    op = "*";
    readPosition = 1;
  } else if (n == 4) {
    op = "/";
    readPosition = 1;
  } else if (n == 5) {
    op = "%";
    readPosition = 1;
  } else if (n == 6) {
    readPosition = 2;
    // fetching results

    let result = `${a} ${op} ${b} = ${res}`;
    resTable.push(result);
    document.getElementById("result").innerHTML =
      "<ul>" +
      resTable
        .map(function(res) {
          return "<li>" + res + "</li>";
        })
        .join("") +
      "</ul>";
    // end fetching results
    reset();
  }
  updateScreen();

  //op = n ;
  //readPosition++ ;
}

function restart() {
  document.getElementById("input").innerHTML = "";
  a = 0;
  b = 0;
  res = 0;
  op = "+";
  readPosition = 0;
}

//Color
document.getElementById("form1").addEventListener("submit", function(event) {
  changeColor1(event);
});

document.getElementById("form2").addEventListener("submit", function(event) {
  changeColor2(event);
});

function hashToRgb(x) {
  return (
    "rgb(" +
    x
      .match(/[A-Za-z0-9]{2}/g)
      .map(function(v) {
        return parseInt(v, 16);
      })
      .join(",") +
    ")"
  );
}

function changeColor1(event) {
  event.preventDefault();
  let n = document.getElementById("number").value;
  let x = document.getElementById("myColor1").value;
  let y = document.getElementById("myColor2").value;

  console.log("colors", n, x, y);

  let rgb1 = hashToRgb(x);
  let rgb2 = hashToRgb(y);
  // background-image: linear-gradient(
  //   45deg,
  //   rgb(165, 116, 255),
  //   rgb(255, 81, 232)
  // );
  z = document.getElementById(
    "body"
  ).style.backgroundImage = `linear-gradient(${n}deg,${rgb1},${rgb2})`;
  console.log(z);
}

function changeColor2(event) {
  event.preventDefault();
  let n = document.getElementById("number").value;
  let x = document.getElementById("myColor3").value;
  let y = document.getElementById("myColor4").value;

  console.log("colors", n, x, y);

  let rgb1 = hashToRgb(x);
  let rgb2 = hashToRgb(y);
  // background-image: linear-gradient(
  //   45deg,
  //   rgb(165, 116, 255),
  //   rgb(255, 81, 232)
  // );

  dom = document.querySelectorAll(".button");
  for (let i = 0; i < 18; i++) {
    console.log(dom[i]);
    dom[i].style.backgroundImage = `linear-gradient(${n}deg,${rgb1},${rgb2})`;
  }
}

function buttonHide() {
  var x = document.getElementById("buttonRes");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// read from keyboard
// document.addEventListener("keydown", function(event) {
//   if (event.key == "+") {
//     console.log("+ is pressed");
//     switchletiable(1);
//   }
//   if (event.key == "-") {
//     console.log("- is pressed");
//     switchVariable(2);
//   }
//   if (event.key == "*") {
//     console.log("* is pressed");
//     switchVariable(3);
//   }
//   if (event.key == "/") {
//     console.log("/ is pressed");
//     switchVariable(4);
//   }
//   if (event.key == "=") {
//     console.log(" = is pressed ");
//     switchVariable(5);
//   }
//   if (event.keyCode == "13") {
//     console.log("enter is pressed");
//     switchVariable(5);
//   }
//   for (var i = 0; i < 10; i++) {
//     if (event.key == i) {
//       readFromScreen(i);
//       console.log(i, " is pressed");
//     }
//   }
// });
