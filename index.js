import Component from "./Component.js";

const pageBody = document.querySelector("body");
const mainWeb = new Component(pageBody, "container", "div");

const button = document.querySelector(".button__htmlcreator");

button.addEventListener("click", () => {
  const generateTag = document.querySelector(".creator").value;
  const paintTag = new Component(pageBody, "", generateTag);
});
