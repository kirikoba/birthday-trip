document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // 設定
  // =============================
  const correctPassword = "birthday2026";


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
  const isLoggedIn =
    localStorage.getItem("birthdayTripLoggedIn");

  if (isLoggedIn === "true") {
    showMainScreen();
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