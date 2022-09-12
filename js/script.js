const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  singUp = document.querySelector(".singup-link"),
  goBack = document.querySelector(".login-link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => {
      if (pwFields.type === "password") {
        pwFields.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwFields.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

singUp.addEventListener("click", () => {
  container.classList.add("active");
});
goBack.addEventListener("click", () => {
  container.classList.remove("active");
});

// Esto simularia una base de datos. Guardo la contraseña en texto plano aunque por cuestiones seguridad no se haria asi.
const usuario = {
  email: "admin@bb.vision",
  password: "admin",
};

const password = document.getElementById("pass");
const email = document.getElementById("email");
const logBtn = document.getElementById("log");
const error = document.querySelector(".error");
logBtn.addEventListener("click", () => {
  if (password.value !== usuario.password || email.value !== usuario.email) {
    error.classList.remove("hide");
    return;
  }
  error.classList.add("hide");
  window.location.href = "html/home.html";
});
