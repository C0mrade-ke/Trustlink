const pages = ["login", "signup", "home", "mfa"];

function showPage(id) {
  pages.forEach(p => document.getElementById(p).style.display = "none");
  document.getElementById(id).style.display = "block";
}

// initial
showPage("login");

// navigation
loginBtn.onclick = () => showPage("mfa");
toSignup.onclick = () => showPage("signup");
toLogin.onclick = () => showPage("login");
logoutBtn.onclick = () => showPage("login");

// MFA simulation
verifyOtp.onclick = () => {
  const otp = document.getElementById("otp").value;
  if (otp === "123456") {
    showPage("home");
  } else {
    alert("Invalid OTP");
  }
};

// trust score
calcBtn.onclick = () => {
  const rating = Number(ratingInput = document.getElementById("rating").value);
  const delivery = document.getElementById("delivery").value;
  const complaint = document.getElementById("complaint").value;

  let score = rating * 20;
  if (delivery === "no") score -= 20;
  if (complaint === "yes") score -= 30;

  score = Math.max(0, Math.min(100, score));
  document.getElementById("score").textContent = score + "%";
};
const complaintSelect = document.getElementById("complaint");
const additionalReview = document.getElementById("additionalReview");

complaintSelect.addEventListener("change", () => {
  if (complaintSelect.value === "yes") {
    additionalReview.style.display = "block";
  } else {
    additionalReview.style.display = "none";
  }
});
