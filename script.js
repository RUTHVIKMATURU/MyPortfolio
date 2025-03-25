document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("formMessage").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
