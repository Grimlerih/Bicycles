const leftBtn = document.querySelector(".roads__btns_left");
const rightBtn = document.querySelector(".roads__btns_right");
const container = Array.from(document.querySelector(".roads__img").children);
const roadsInfo = Array.from(document.querySelectorAll(".roads__box"));

const scrollAmount = 700;
var currentIndex = 0;

const swtchInfo = (operator) => {
  if (roadsInfo[currentIndex]) {
    roadsInfo[currentIndex].classList.add("hidden");
  }

  if (operator === "plus") {
    currentIndex++;
  } else if (operator === "minus") {
    currentIndex--;
  }
  console.log(currentIndex);
  if (roadsInfo[currentIndex] && currentIndex !== 3) {
    roadsInfo[currentIndex].classList.remove("hidden");
  } else {
    currentIndex = 0;
    roadsInfo[0].classList.remove("hidden");
  }
};

const updateCarousel = () => {
  const roadsImg = document.querySelector(".roads__img");
  roadsImg.innerHTML = "";
  container.forEach((card) => roadsImg.appendChild(card));
};

const rotateCardsForward = () => {
  let firstCard = container.shift();
  container.push(firstCard);
};

const rotateCardsBackward = () => {
  let lastCard = container.pop();
  container.unshift(lastCard);
};

rightBtn.addEventListener("click", () => {
  container.scrollLeft += scrollAmount;
  swtchInfo("plus");
  rotateCardsForward();
  updateCarousel();
});

leftBtn.addEventListener("click", () => {
  container.scrollLeft -= scrollAmount;
  swtchInfo("minus");
  rotateCardsBackward();
  updateCarousel();
});
