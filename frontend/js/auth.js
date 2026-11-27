document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.getAttribute("aria-controls"));
    const visible = input.type === "password";
    input.type = visible ? "text" : "password";
    button.textContent = visible ? "Sembunyikan" : "Tampilkan";
    button.setAttribute("aria-pressed", String(visible));
  });
});

document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = form.querySelector(".form-feedback");
    const password = form.elements.password;
    if (!form.reportValidity()) return;
    if (form.dataset.authForm === "register" && password.value !== form.elements.confirmPassword.value) {
      feedback.textContent = "Konfirmasi password belum sama.";
      feedback.dataset.state = "error";
      form.elements.confirmPassword.focus();
      return;
    }
    feedback.textContent = form.dataset.authForm === "register"
      ? "Validasi berhasil. Akun belum disimpan karena prototype ini belum memakai backend."
      : "Format input valid. Login belum terhubung ke autentikasi.";
    feedback.dataset.state = "success";
  });
});
