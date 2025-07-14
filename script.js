
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector('.cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', function (event) {
      event.preventDefault();
      alert("✅ You’ve joined the waitlist (mock)!");
    });
  } else {
    console.error("CTA button not found.");
  }
});
