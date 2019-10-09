import style from "../scss/app.scss";
import Navigation from "./components/navigation";
import {
  tns
}
from "tiny-slider/src/tiny-slider.module.js";


document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

const slideNext = document.querySelector('.slideNext');
const slidePrev = document.querySelector('.slidePrev');

const slider = tns({
  container: '.slides',
  items: 4,
  slideBy: "1",
  speed: 400,
  autoWidth: true,
  controls: false,
  loop: true,
  lazyload: true,
  edgePadding: 0,
})

slideNext.addEventListener("click", (event) => {
  slider.goTo('next');
})

slidePrev.addEventListener("click", (event) => {
  slider.goTo('prev');
})