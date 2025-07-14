document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("waitlist-modal");
  const openModalBtn = document.getElementById("open-waitlist-btn");
  const closeModalBtn = document.getElementById("close-modal");
  const form = document.getElementById("waitlist-form");
  const confirmation = document.getElementById("confirmation");

  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    confirmation.classList.add("hidden");
    form.reset();
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      jobTitle: form.jobTitle.value.trim(),
      status: form.status.value,
    };

    try {
      // Placeholder: replace with actual endpoint (e.g., Airtable or API)
      console.log("Submitting:", formData);
      confirmation.classList.remove("hidden");
      form.classList.add("hidden");
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  });
});
