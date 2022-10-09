const easyBtn = document.getElementById('easyBtn');
const normalBtn = document.getElementById('normalBtn');
const hardBtn = document.getElementById('hardBtn');
const errorMsg = document.getElementById('errorMsg');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const first = document.getElementById('first');
const second = document.getElementById('second');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const textarea= document.getElementById('textarea');
let numFirst = document.getElementById("first");
let numSecond = document.getElementById("second");
let A = document.querySelector('input[name=answer]');
let result = document.getElementById("result");
let GC = document.getElementById("GC");

let level;
let keisanBox = [];

// --------------------------------------
// 難易度設定画面
// 簡単モード
easyBtn.addEventListener('click', () => {
  easyBtn.style.background = '#F4B2BA';
  easyBtn.style.border = '2px solid black';
  startBtn.style.pointerEvents = 'auto';
  errorMsg.style.display = 'none';
  level = 1;
  if ((normalBtn.style.background = '#F4B2BA')) {
    normalBtn.style.background = '#BDBDBD';
    normalBtn.style.border = '1px solid black';
  }
  if ((hardBtn.style.background = '#F4B2BA')) {
    hardBtn.style.background = '#BDBDBD';
    hardBtn.style.border = '1px solid black';
  }
});
// ふつうモード
normalBtn.addEventListener('click', () => {
  normalBtn.style.background = '#F4B2BA';
  normalBtn.style.border = '2px solid black';
  startBtn.style.pointerEvents = 'auto';
  level = 2;
  errorMsg.style.display = 'none';
  if ((hardBtn.style.background = '#F4B2BA')) {
    hardBtn.style.background = '#BDBDBD';
    hardBtn.style.border = '1px solid black';
  }
  if ((easyBtn.style.background = '#F4B2BA')) {
    easyBtn.style.background = '#BDBDBD';
    easyBtn.style.border = '1px solid black';
  }
});
// むずかしいモード
hardBtn.addEventListener('click', () => {
  hardBtn.style.background = '#F4B2BA';
  hardBtn.style.border = '2px solid black';
  startBtn.style.pointerEvents = 'auto';
  errorMsg.style.display = 'none';
  level = 3;
  if ((easyBtn.style.background = '#F4B2BA')) {
    easyBtn.style.background = '#BDBDBD';
    easyBtn.style.border = '1px solid black';
  }
  if ((normalBtn.style.background = '#F4B2BA')) {
    normalBtn.style.background = '#BDBDBD';
    normalBtn.style.border = '1px solid black';
  }
});

  function keisanBoxShuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      // 0~(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));
      // 要素の並び替えを実行
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }


  // かんたんもーど
function kantanMode() {
  // gamecount 初期化
  gameCount = 0;
  result.textContent = '';
  GC.textContent = `${gameCount}/10`;
  submitBtn.style.display = 'block';
  GC.style.display = "block";
  resultContainer.style.fontSize = "50px";
  resultContainer.style.marginTop="30px"
  first.style.display = "block";
  second.style.display = "block";
  plus.style.display = "block";
  equal.style.display = "block";
  textarea.style.display = "block";

  keisanBox = [];
  for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
      let hashbox = {};
      hashbox.kotae = i;
      hashbox.first = k;
      hashbox.second = i - k;
      if (hashbox.second > 0) {
        keisanBox.push(hashbox);
      }
    }
  }
  keisanBoxShuffle(keisanBox);

  numFirst.textContent = keisanBox[0].first
  numSecond.textContent = keisanBox[0].second

  maru = 0;
  batsu = 0;


};
  // ふつうもーど
function hutsuuMode() {
  // gamecount 初期化
  gameCount = 0;
  result.textContent = '';
  GC.textContent = `${gameCount}/10`;
  submitBtn.style.display = 'block';
  GC.style.display = "block";
  resultContainer.style.fontSize = "50px";
  resultContainer.style.marginTop="30px"
  first.style.display = "block";
  second.style.display = "block";
  plus.style.display = "block";
  equal.style.display = "block";
  textarea.style.display = "block";

  keisanBox = [];
  for (let i = 1; i <= 20; i++) {
    for (let k = 1; k <= 20; k++) {
      let hashbox = {};
      hashbox.kotae = i;
      hashbox.first = k;
      hashbox.second = i - k;
      if (hashbox.second > 0) {
        keisanBox.push(hashbox);
      }
    }
  }
  keisanBoxShuffle(keisanBox);

  numFirst.textContent = keisanBox[0].first
  numSecond.textContent = keisanBox[0].second

  maru = 0;
  batsu = 0;


};

  //むずかしいもーど
function muzuiMode() {
  // gamecount 初期化
  gameCount = 0;
  result.textContent = '';
  GC.textContent = `${gameCount}/10`;
  submitBtn.style.display = 'block';
  GC.style.display = "block";
  resultContainer.style.fontSize = "50px";
  resultContainer.style.marginTop="30px"
  first.style.display = "block";
  second.style.display = "block";
  plus.style.display = "block";
  equal.style.display = "block";
  textarea.style.display = "block";

  keisanBox = [];
  for (let i = 1; i <= 30; i++) {
    for (let k = 1; k <= 30; k++) {
      let hashbox = {};
      hashbox.kotae = i;
      hashbox.first = k;
      hashbox.second = i - k;
      if (hashbox.second > 0) {
        keisanBox.push(hashbox);
      }
    }
  }
  keisanBoxShuffle(keisanBox);

  numFirst.textContent = keisanBox[0].first
  numSecond.textContent = keisanBox[0].second

  maru = 0;
  batsu = 0;


};

submitBtn.addEventListener('click', () => {

  if (gameCount < 10) {

    if (A.value == "") {
      GC.textContent = "すうじをいれてね！";
      result.textContent = "";
      return
    }else if (A.value != "" && A.value == keisanBox[0].kotae) {
        result.textContent = '○';
        maru += 1;
        gameCount = gameCount + 1;
        GC.textContent = `${gameCount}/10`;
        A.value = '';
      } else if(A.value != "" && A.value != keisanBox[0].kotae) {
        result.textContent = 'X';
        batsu += 1;
        gameCount = gameCount + 1;
        GC.textContent = `${gameCount}/10`;
        A.value = '';
      }
    } else if (gameCount === 10) {
      result.textContent = `10もんちゅう、せいかい${maru}、まちがい:${batsu}`;
      GC.textContent = `${gameCount}/10`;
      first.style.display = 'none';
      second.style.display = 'none';
      plus.style.display = 'none';
      equal.style.display = 'none';
      textarea.style.display = 'none';
      submitBtn.style.display = 'none';
      GC.style.display = 'none';
      resultContainer.style.fontSize = '30px';
      resultContainer.style.marginTop="250px"
      backBtn.style.display = 'block';
      A.value = '';
    }
    keisanBoxShuffle(keisanBox);
    numFirst.textContent = keisanBox[0].first;
    numSecond.textContent = keisanBox[0].second;
  });

// スタートボタンを押すと走り出します。
startBtn.addEventListener('click', () => {
  //全般設定:難易度設定ボタン出現させます。

  // 簡単モードの場合
  if (level === 1) {
    // メインゲームエリアを表示、レベル選択画面を消す。
    mainGameArea.style.display = 'block';
    levelChoice.style.display = 'none';
    // --------------------------------------
    // かんたんモードの処理を書く
    // --------------------------------------
    kantanMode();
  } else if (level === 2) {
    // メインゲームエリアを表示、レベル選択画面を消す。
    mainGameArea.style.display = 'block';
    levelChoice.style.display = 'none';
        // --------------------------------------
    //ふつうモードの処理を書く
    // --------------------------------------
    hutsuuMode();


  } else if (level === 3) {
    // メインゲームエリアを表示、レベル選択画面を消す。
    mainGameArea.style.display = 'block';
    levelChoice.style.display = 'none';
        // --------------------------------------
    //むずいモードの処理を書く
    // --------------------------------------
    muzuiMode();
  }
});

// 難易度選択へ戻るボタン
backBtn.addEventListener('click', () => {
  // 画面を難易度選択にしています。
  mainGameArea.style.display = 'none';
  levelChoice.style.display = 'block';
  backBtn.style.display = 'none';
});
