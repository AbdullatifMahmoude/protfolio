// Typed animation

var typed = new Typed("#typed", {
  strings: [
    "Full-Stack Web Engineer",
    "Database Developer",
    "CyberSecurity Engineer",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 3000,
  showCursor: false,
  loop: true,
});
function theme() {
  const light = document.getElementById("light");
  const dark = document.getElementById("dark");

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    dark.style.display = "block";
    light.style.display = "none";
  } else {
    dark.style.display = "none";
    light.style.display = "block";
  }
}

// menu toogle

const menuItems = document.querySelectorAll(".nav .item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add('active')
  });
});
