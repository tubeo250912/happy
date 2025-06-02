let input = "";

function press(num) {
  if (input.length < 6) {
    input += num;
    document.getElementById("password").value = "*".repeat(input.length);
  }
}

function clearInput() {
  input = "";
  document.getElementById("password").value = "";
}

function checkPassword() {
  if (input === "1306") {
    document.querySelector(".password-box").classList.add("hidden");
    document.getElementById("greeting").classList.remove("hidden");
  } else {
    alert("Sai mật khẩu rồi 😅");
    clearInput();
  }
}