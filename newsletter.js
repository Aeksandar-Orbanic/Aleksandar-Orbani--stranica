const text = document.getElementById("newsletter-text");
const form = document.getElementById("newsletter-form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  text.textContent = "Hvala što ste se učlanili u naš newsletter";
  form.remove();
});

