const leftBtn = document.querySelector(".roads__btns_left");
const rightBtn = document.querySelector(".roads__btns_right");
const container = Array.from(document.querySelector(".roads__img").children);
const roadsInfo = Array.from(document.querySelectorAll(".roads__box"));
const roadsVectorImg = Array.from(
  document.querySelector(".roads__vector").children
);

const scrollAmount = 700;
var currentIndex = 0;

const swtchInfo = (operator) => {
  roadsInfo[currentIndex].classList.add("hidden");
  roadsVectorImg[currentIndex].classList.add("hidden");

  if (operator === "plus") {
    currentIndex = (currentIndex + 1) % roadsInfo.length;
  } else if (operator === "minus") {
    currentIndex = (currentIndex - 1 + roadsInfo.length) % roadsInfo.length;
  }

  roadsInfo[currentIndex].classList.remove("hidden");
  roadsVectorImg[currentIndex].classList.remove("hidden");
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
