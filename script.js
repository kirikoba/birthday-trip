document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // 設定
  // =============================
  const correctPassword = "akn__rn20";


  // =============================
  // HTML取得
  // =============================
  const loginScreen =
    document.getElementById("loginScreen");

  const mainScreen =
    document.getElementById("mainScreen");

  const passwordInput =
    document.getElementById("passwordInput");

  const loginButton =
    document.getElementById("loginButton");

  const loginError =
    document.getElementById("loginError");

  const togglePassword =
    document.getElementById("togglePassword");

  const startButton =
    document.getElementById("startButton");


  // =============================
  // すでにログイン済みなら飛ばす
  // =============================
const loginTime =
  localStorage.getItem("birthdayTripLoginTime");

const twelveHours =
  12 * 60 * 60 * 1000;

if (loginTime) {

  const elapsedTime =
    Date.now() - Number(loginTime);

  if (elapsedTime < twelveHours) {

    showMainScreen();

  } else {

    localStorage.removeItem(
      "birthdayTripLoginTime"
    );

  }

}

  // =============================
  // パスワード表示 / 非表示
  // =============================
  togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

      passwordInput.type = "text";
      togglePassword.textContent = "🙈";

    } else {

      passwordInput.type = "password";
      togglePassword.textContent = "👁";

    }

  });


  // =============================
  // ログイン
  // =============================
  loginButton.addEventListener("click", function () {

    const inputPassword =
      passwordInput.value;

    if (inputPassword === correctPassword) {

      localStorage.setItem(
        "birthdayTripLoggedIn",
        "true"
      );

      showMainScreen();

    } else {

      loginError.textContent =
        "あいことばが違うみたい…";

    }

  });


  // Enterでもログイン
  passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
      loginButton.click();
    }

  });


  // =============================
  // メイン画面表示
  // =============================
  function showMainScreen() {

    loginScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");

  }


  // =============================
  // 旅開始
  // =============================
  startButton.addEventListener("click", function () {

    alert("たびのはじまり！");

  });

});