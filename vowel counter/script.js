let input = document.getElementById("input");
let countBtn = document.getElementById("count-btn");
let resetBtn = document.getElementById("reset-btn");
let result = document.getElementById("result");
let sentence = document.getElementById("sentence")
let form = document.getElementById("form");

function submit(e) {
  e.preventDefault();
}
form.addEventListener("submit", submit);

sentence.classList.add("hidden")

countBtn.onclick = function () {
  let inputValueArr = input.value.split("");
  result.innerHTML = "0"
  sentence.innerHTML = ""

  for (i = 0; i <= inputValueArr.length; i++) {
    if (
      (inputValueArr[i] === "a") |
      (inputValueArr[i] === "A") |
      (inputValueArr[i] === "e") |
      (inputValueArr[i] === "E") |
      (inputValueArr[i] === "i") |
      (inputValueArr[i] === "I") |
      (inputValueArr[i] === "o") |
      (inputValueArr[i] === "O") |
      (inputValueArr[i] === "u") |
      (inputValueArr[i] === "U") |
      (inputValueArr[i] === "y") |
      (inputValueArr[i] === "Y")
    ) {
      result.innerHTML = Number(result.innerHTML) + 1
    }
  }

  if(input.value !== "") {
    sentence.classList.remove("hidden")

    let sentenceContent = input.value

  for(i = 0; i <= sentenceContent.length; i++) {

    let Letter = document.createElement("span")
    Letter.append(sentenceContent[i])
    sentence.append(Letter)

    if (
      (Letter.innerHTML === "a") |
      (Letter.innerHTML === "A") |
      (Letter.innerHTML === "e") |
      (Letter.innerHTML === "E") |
      (Letter.innerHTML === "i") |
      (Letter.innerHTML === "I") |
      (Letter.innerHTML === "o") |
      (Letter.innerHTML === "O") |
      (Letter.innerHTML === "u") |
      (Letter.innerHTML === "U") |
      (Letter.innerHTML === "y") |
      (Letter.innerHTML === "Y")
    ) {
      Letter.style.background = "#dbf3f5"
    } else if(Letter.innerHTML === " ") {
      let lineBreak = document.createElement("br")
      Letter.replaceWith(lineBreak)
    }else {
      Letter.style.background = "Transparent"
      Letter.style.color = "white"
    }
  }
  sentence.lastChild.remove()
  }else {
    sentence.classList.add("hidden")
  }
  input.value = ""
};

resetBtn.onclick = function() {
    input.value = ""
    result.innerHTML ="0"
    sentence.classList.add("hidden")
}