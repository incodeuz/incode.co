const resNav = document.getElementById("nav-responsive");
const modal = document.getElementById("modal");
const html = document.getElementsByTagName("body");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.querySelector(".burger");
const blurEl = document.querySelector(".blur");
const loginBtn = document.querySelector(".btn-login");
const loginBtnClose = document.querySelector(".btn-login-close");
const navLogin = document.getElementById("nav-login");

openBtn.addEventListener("click", () => {
  blurEl.style.display = "block";
  resNav.style.transform = "translateX(0)";
});

blurEl.addEventListener("click", () => {
  resNav.style.transform = "translateX(500px)";
  blurEl.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  resNav.style.transform = "translateX(500px)";
  blurEl.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  resNav.style.transform = "translateX(500px)";
  blurEl.style.display = "none";
  modal.showModal();
});

navLogin.addEventListener("click", () => {
  resNav.style.transform = "translateX(500px)";
  blurEl.style.display = "none";
  modal.showModal();
});

loginBtnClose.addEventListener("click", () => {
  modal.close();
  blurEl.style.display = "none";
});
