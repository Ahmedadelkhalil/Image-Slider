// the order when writing the code line is so important

//..............................................................................
//setting up variables

let imagesArr = Array.from(document.querySelectorAll(".images img"));

imgsNumber = imagesArr.length;

let currentIndex = 1;

imgCounter = document.querySelector(".img-counter");

let indecators = document.querySelector(".indecators");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

//...........................................................................................
// starting write functions

prevBtn.onclick = prevbtn;
nextBtn.onclick = nextbtn;

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "theParentUl");

for (let i = 1; i <= imgsNumber; i++) {
  let paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}

indecators.appendChild(paginationElement);
let theParentUl = document.getElementById("theParentUl");

let pag = Array.from(document.querySelectorAll("#theParentUl li"));

// console.log(pag);

pag.forEach((pag) => {
  pag.onclick = function () {
    currentIndex = this.getAttribute("data-index");
    checker();
  };
});

checker();

function nextbtn() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    checker();
  }
}
function prevbtn() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    checker();
  }
}

function checker() {
  imgCounter.textContent = `Image #${currentIndex} From ${imgsNumber}`;

  removeAll();

  imagesArr[currentIndex - 1].classList.add("active");

  theParentUl.children[currentIndex - 1].classList.add("active");

  if (currentIndex == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (currentIndex == imgsNumber) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeAll() {
  imagesArr.forEach((img) => {
    img.classList.remove("active");
  });

  pag.forEach((li) => {
    li.classList.remove("active");
  });
}
