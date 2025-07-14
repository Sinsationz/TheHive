document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("waitlist-modal");
  const openModalBtn = document.getElementById("open-waitlist-btn");
  const closeModalBtn = document.getElementById("close-modal");
  const form = document.getElementById("waitlist-form");
  const status = document.getElementById("form-status");

  // Open modal
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    status.textContent = "";
    form.reset();
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Click outside modal closes it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      jobTitle: form.jobtitle.value.trim()
    };
    console.log("Submitting:", formData);
    status.textContent = "✅ Submitted! We'll be in touch.";
    modal.classList.add("hidden");
  });
});
