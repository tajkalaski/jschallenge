const hamburger = document.querySelector(".hamburger");
const bubbleOne = document.querySelector(".bubble-one");
const bubbleTwo = document.querySelector(".bubble-two");
const bubbleThree = document.querySelector(".bubble-three");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  bubbleOne.classList.toggle("bubble--active");
  bubbleTwo.classList.toggle("bubble--active");
  bubbleThree.classList.toggle("bubble--active");
};

hamburger.addEventListener("click", handleClick);
