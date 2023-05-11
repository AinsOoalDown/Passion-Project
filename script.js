let colorMode = "dark";

function toggleColors() {
  const button = document.querySelector(".color-toggle");
  document.body.classList.toggle("light-mode");
  if (colorMode === "dark") {
    colorMode = "light";
    button.textContent = "Dark Mode";
  } else {
    colorMode = "dark";
    button.textContent = "Light Mode";
  }
}
