document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("waitlist-modal");
  const openBtn = document.getElementById("open-waitlist-btn");
  const closeBtn = document.getElementById("close-modal");
  const form = document.getElementById("waitlist-form");
  const status = document.getElementById("form-status");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    form.reset();
    status.textContent = "";
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const jobtitle = document.getElementById("jobtitle").value.trim();

    console.log("Submitted:", { name, email, jobtitle });
    status.textContent = "✅ Submission received!";
    modal.classList.add("hidden");
  });
});
