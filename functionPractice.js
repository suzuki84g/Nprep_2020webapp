// 「JavaScript での計算」における練習問題 では、 「半径 12 cm の円の面積が何平方 cm かを HTML に出力するプログラム」を書いてみました。

// 今回は、どのような半径に対しても面積を求められる関数を作りましょう。そして、その関数を用いて半径 5cm, 10cm, 15cm の円の面積を HTML に出力するプログラムを書いてみましょう。
// （円の面積は 半径 × 半径 × 3.14 で求められます）。

const radius = 15  // 半径を入力

function circleCalc() {
    var area = radius * radius * 3.14;
    document.getElementById('birth-time').innerText = '半径' + radius + 'の円の面積は' + area + 'です。';
}

setInterval(circleCalc, 50);