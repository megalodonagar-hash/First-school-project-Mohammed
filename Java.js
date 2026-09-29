const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const JumpScareButton = document.getElementById("JumpScareButton");
const jumpscare = document.getElementById("jumpscare");
const closeJumpscare = document.getElementById("closeJumpscare");

JumpScareButton.addEventListener("click", function(event) {
    event.preventDefault();
    jumpscare.style.display = "block";
});

closeJumpscare.addEventListener("click", function() {
    jumpscare.style.display = "none";
});
