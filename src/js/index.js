const toggleClassOnFirstMatch = (target, className) =>
      document.getElementsByClassName(target)[0].classList.toggle(className)

function toggleDarkMode (e) {
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

function navToGithub (e) {
  e.preventDefault();
  window.location.href = "https://github.com/jaohara/it115-team1-site"
}
