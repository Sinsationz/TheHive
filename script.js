document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("waitlist-modal");
  const openBtn = document.getElementById("open-waitlist-btn");
  const closeBtn = document.getElementById("close-modal");
  const form = document.getElementById("waitlist-form");
  const status = document.getElementById("form-status");

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Click outside modal closes it
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Submit form (no real backend yet)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const jobTitle = form.jobtitle.value.trim();

    console.log("Submitted:", { name, email, jobTitle });

    status.textContent = "✅ Submitted! We'll be in touch.";
    form.reset();
    modal.classList.add("hidden");
  });
});
