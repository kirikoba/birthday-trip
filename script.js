document.addEventListener("DOMContentLoaded", function () {

  // =========================================
  // 設定
  // =========================================

  // あいことば
  const correctPassword = "akn__rn20";
  // 旅行開始日
  const TRIP_START_DATE = "2027-01-05";

  // テストモード
  // true  = TEST_DATEを使う
  // false = 実際の日付を使う
  const TEST_MODE = true;

  // テストしたい日付
  // 例：
  // "2027-01-04" → 旅行前
  // "2027-01-05" → 旅行当日
  const TEST_DATE = "2027-01-05";


  // =========================================
  // HTML取得
  // =========================================

  const loginScreen =
    document.getElementById("loginScreen");

  const beforeTripScreen =
    document.getElementById("beforeTripScreen");

  const tripMenuScreen =
    document.getElementById("tripMenuScreen");

  const passwordInput =
    document.getElementById("passwordInput");

  const loginButton =
    document.getElementById("loginButton");

  const loginError =
    document.getElementById("loginError");

  const togglePassword =
    document.getElementById("togglePassword");

  const startTripButton =
    document.getElementById("startTripButton");

  const memoryButton =
    document.getElementById("memoryButton");

  const memoryMessage =
    document.getElementById("memoryMessage");


  // =========================================
  // 12時間ログイン判定
  // =========================================

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


  // =========================================
  // パスワード表示 / 非表示
  // =========================================

  togglePassword.addEventListener(
    "click",
    function () {

      if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

      } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

      }

    }
  );


  // =========================================
  // ログインボタン
  // =========================================

  loginButton.addEventListener(
    "click",
    function () {

      const inputPassword =
        passwordInput.value;

      if (inputPassword === correctPassword) {

        // ログイン時刻を保存
        localStorage.setItem(
          "birthdayTripLoginTime",
          Date.now().toString()
        );

        loginError.textContent = "";

        showMainScreen();

      } else {

        loginError.textContent =
          "あいことばが違うみたい…";

      }

    }
  );


  // =========================================
  // Enterでもログイン
  // =========================================

  passwordInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        loginButton.click();

      }

    }
  );


  // =========================================
  // ログイン後
  // =========================================

  function showMainScreen() {

    loginScreen.classList.add("hidden");

    checkTripDate();

  }


  // =========================================
  // 旅行日の判定
  // =========================================

  function checkTripDate() {

    let today;

    if (TEST_MODE) {

      today =
        new Date(TEST_DATE + "T00:00:00");

    } else {

      today =
        new Date();

    }

    const tripStartDate =
      new Date(
        TRIP_START_DATE + "T00:00:00"
      );


    if (today < tripStartDate) {

      showBeforeTripScreen();

    } else {

      showTripMenu();

    }

  }


  // =========================================
  // 旅行前画面
  // =========================================

  function showBeforeTripScreen() {

    beforeTripScreen.classList.remove(
      "hidden"
    );

    tripMenuScreen.classList.add(
      "hidden"
    );

  }


  // =========================================
  // 旅行メニュー画面
  // =========================================

  function showTripMenu() {

    beforeTripScreen.classList.add(
      "hidden"
    );

    tripMenuScreen.classList.remove(
      "hidden"
    );

    checkTripProgress();

  }


  // =========================================
  // 旅をしたか確認
  // =========================================

  function checkTripProgress() {

    const tripStarted =
      localStorage.getItem(
        "birthdayTripStarted"
      );

    if (tripStarted === "true") {

      memoryButton.disabled = false;

      memoryMessage.textContent = "";

    } else {

      memoryButton.disabled = true;

      memoryMessage.textContent =
        "旅をしたあとに見られるよ";

    }

  }


  // =========================================
  // 「旅をはじめる」
  // =========================================

  startTripButton.addEventListener(
    "click",
    function () {

      localStorage.setItem(
        "birthdayTripStarted",
        "true"
      );

      checkTripProgress();

      alert("たびのはじまり！");

    }
  );


  // =========================================
  // 「思い出を見返す」
  // =========================================

  memoryButton.addEventListener(
    "click",
    function () {

      alert("思い出ページはこれから作るよ！");

    }
  );

});