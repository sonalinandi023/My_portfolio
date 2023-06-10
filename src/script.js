// console.log("JavaScript code executed");
// console.log(document.getElementsByClassName(".theme-btn")); // Check if the theme button is selected
// console.log(document.querySelectorAll(".control")); // Check if all control buttons are selected
// document.querySelector(".theme-btn").addEventListener("click", () => {
//     console.log("Theme button clicked");
//   });
  
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.addEventListener("DOMContentLoaded", function() {
        const themeButton = document.querySelector(".theme-btn");
        if (themeButton) {
          themeButton.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");
          });
        }
      });
      
      
})();


 
