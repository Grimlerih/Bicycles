const highwayBtn = document.querySelector(".bycicle__type_highway");
const grevelBtn = document.querySelector(".bycicle__type_grevel");
const ttBtn = document.querySelector(".bycicle__type_tt");

const grevelList = document.querySelector(".bycicle-list__grevel-box");
const ttList = document.querySelector(".bycicle-list__tt-box");
const highwayList = document.querySelector(".bycicle-list__highway-box");

if (highwayBtn.classList.contains("bycicle__type_active")) {
  grevelList.classList.add("hidden");
  ttList.classList.add("hidden");
}

grevelBtn.addEventListener("click", () => {
  grevelList.classList.remove("hidden");
  highwayList.classList.add("hidden");
  ttList.classList.add("hidden");
  grevelBtn.classList.add("bycicle__type_active");
  highwayBtn.classList.remove("bycicle__type_active");
  ttBtn.classList.remove("bycicle__type_active");
});

ttBtn.addEventListener("click", () => {
  grevelList.classList.add("hidden");
  highwayList.classList.add("hidden");
  ttList.classList.remove("hidden");
  grevelBtn.classList.remove("bycicle__type_active");
  ttBtn.classList.add("bycicle__type_active");
  highwayBtn.classList.remove("bycicle__type_active");
});

highwayBtn.addEventListener("click", () => {
  ttList.classList.add("hidden");
  grevelList.classList.add("hidden");
  highwayList.classList.remove("hidden");
  ttBtn.classList.remove("bycicle__type_active");
  highwayBtn.classList.add("bycicle__type_active");
  grevelBtn.classList.remove("bycicle__type_active");
});
