const HERO_CANVAS_ID = "hero-background-canvas";

const toggleClassOnFirstMatch = (target, className) =>
      document.getElementsByClassName(target)[0].classList.toggle(className)

function toggleDarkMode(e) {
  e.preventDefault();
  document.getElementsByTagName("html")[0].classList.toggle("dark");
  //document.getElementsByClassName("toggle-dark")[0].classList.toggle("active");
  //document.getElementsByClassName("toggle-light")[0].classList.toggle("active");
  toggleClassOnFirstMatch("toggle-dark", "active");
  toggleClassOnFirstMatch("toggle-light", "active");
};

function toggleMenu(e) {
  e.preventDefault();
  document.getElementsByTagName("body")[0].classList.toggle("menu-active");
  toggleClassOnFirstMatch("small-nav", "active");
  
};

function toggleImageBox(e) {
  e.preventDefault();
  console.log("Toggling image box...")
  const imageBox = document.getElementById("image-box");

  if ([...imageBox.classList].includes("image-box-appear")){
    imageBox.classList.add("image-box-to-hide");
  } 
  else {
    imageBox.classList.add("image-box-appear");
  }

  imageBox.classList.toggle("active");

  if ([...imageBox.classList].includes("image-box-to-hide")){
    setTimeout(() => {
      imageBox.classList.remove("image-box-appear");
      imageBox.classList.remove("image-box-to-hide");
    }, 200);
  }
}

function navToGithu(e) {
  e.preventDefault();
  window.location.href = "https://github.com/jaohara/it115-team1-site";
}


// TODO: 
function generateBackground() {
  const bg = document.getElementById(HERO_CANVAS_ID);
  bg.width = window.innerWidth;
  bg.height = window.innerHeight;
  const ctx = bg.getContext("2d");

  const getSubdivisionOfWidth = subdivision => Math.floor(window.innerWidth / subdivision);


  // an idea for a repeatable function to draw the bezier curve
  //  all default params are arbitrary
  function drawCurve (curveX = 50, curveY = 500, iteration = 1, strokeStyle = "#DBE4EE", drawCurvePoints = true) {
    const halfHeight = Math.floor(window.innerHeight/2);
    const startHeight = halfHeight + (5 * (window.scrollY /10));

    if (drawCurvePoints) {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(curveX, curveY, 4, 4);
    }

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    // ctx.strokeStyle = "#0000FF";
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.moveTo(0, halfHeight);
    ctx.quadraticCurveTo(curveX, curveY, window.innerWidth, halfHeight);
    ctx.stroke();
  }

  const inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  
  // hardcoded idea for now
  // const xArray = [25,50,75,100,125,150,175,200].map(value => Math.floor(value * (window.scrollY * 0.002)));
  const xArray = inputArray.map(value => value * getSubdivisionOfWidth(inputArray.length));
  // const yArray = [0,50,100,150,200,250,300,350].map(value => Math.floor(value * (window.scrollY * 0.002)));
  const yArray = inputArray.map(value => Math.floor(Math.pow(value, 2)) * 10 - 500);
  // const yArray = inputArray.map(value => Math.floor(Math.pow(value, )));
  
  // very stupid implementation for now
  for (let i = 0; i < xArray.length; i++) {
    drawCurve(xArray[i], yArray[i], i);
  }
}

window.addEventListener("load", (e) => {
  // reveal hero
  document.getElementById("hero-content-wrapper").classList.remove("hidden");
  document.getElementById(HERO_CANVAS_ID).classList.remove("hidden");

  // scripts for when the page loads
  generateBackground();
});

// redraw background on resize
window.addEventListener("resize", (e) => {
  generateBackground();
});


// scroll listener 
window.addEventListener("scroll", (e) => {
  console.log("Scroll event - window.scrollY: ", window.scrollY);
  const scrollClassName = "scroll-at-top"
  const scrollBuffer = 92;
  const pageHeader = document.getElementById("page-header");

  if (window.scrollY >= scrollBuffer) {
    pageHeader.classList.remove(scrollClassName);
  }
  else {
    pageHeader.classList.add(scrollClassName);
  }

  generateBackground();
});