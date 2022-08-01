const menu = document.getElementById("menu");
const list = document.getElementById("list");
const nav = document.getElementById("nav");

barstatus = 0;
menu.addEventListener("click", () => {
  list.style.opacity = 1;
  if (!barstatus) {
    nav.style.width = "100%";
    list.style.display = "block";
    barstatus = 1;
  } else {
    nav.style.width = "0";
    setTimeout(() => {
      list.style.display = "none";
    }, 500);
    barstatus = 0;
  }
});
