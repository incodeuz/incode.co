let list = document.querySelector(".list");
let options = document.querySelector(".options");
let design = document.querySelectorAll(".name");

list.innerHTML = `
compact`;
options.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.className == "compact") {
    list.innerHTML = `
    compact
    `(document.querySelector(e.target.className)).classList.add("active");
  } else if (e.target.className == "sport") {
    list.innerHTML = `
    sport
    `;
  } else if (e.target.className == "van") {
    list.innerHTML = `
    vans
    `;
  } else {
    console.log("xato");
  }
});
