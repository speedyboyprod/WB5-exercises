const images = document.getElementsByClassName("imageGroup");

Array.from(images).forEach((element) => {
  element.style.border = "2px solid red";
  element.style.margin = "30px";
});

const noAltImg = document.querySelectorAll("img:not([alt])");

Array.from(noAltImg).forEach((img) => {
  img.alt = "graffiti image";
});
