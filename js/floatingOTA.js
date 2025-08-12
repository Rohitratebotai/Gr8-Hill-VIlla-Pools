const toggleBtn = document.getElementById("otaToggleBtn");
const otaIcons = document.getElementById("otaIcons");
const innerIcons = otaIcons.querySelectorAll(".ota-icon-inner");
const closeBtn = document.getElementById("closeOtaBtn");

toggleBtn.addEventListener("click", () => {
  otaIcons.classList.remove("d-none");
  innerIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("show");
    }, index * 100);
  });
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  innerIcons.forEach((icon) => icon.classList.remove("show"));

  setTimeout(() => {
    otaIcons.classList.add("d-none");
    toggleBtn.style.display = "inline-block";
  }, 500);
});
