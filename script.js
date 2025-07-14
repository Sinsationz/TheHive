// script.js – Waitlist Modal Logic

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("waitlist-modal");
  const openBtn = document.getElementById("open-waitlist-btn");
  const closeBtn = document.getElementById("close-modal");
  const form = document.getElementById("waitlist-form");
  const statusText = document.getElementById("form-status");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    statusText.textContent = "";
    form.reset();
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      jobTitle: form.jobtitle.value.trim(),
    };

    try {
      console.log("Submitting...", formData);
      statusText.textContent = "Submitted! ✅";
      form.reset();
    } catch (err) {
      console.error(err);
      statusText.textContent = "Submission failed. Try again.";
    }

    modal.classList.add("hidden");
  });
});
