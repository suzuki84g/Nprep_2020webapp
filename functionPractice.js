// 「JavaScript での計算」における練習問題 では、 「半径 12 cm の円の面積が何平方 cm かを HTML に出力するプログラム」を書いてみました。

// 今回は、どのような半径に対しても面積を求められる関数を作りましょう。そして、その関数を用いて半径 5cm, 10cm, 15cm の円の面積を HTML に出力するプログラムを書いてみましょう。
// （円の面積は 半径 × 半径 × 3.14 で求められます）。

function circleCalc(radius) {  // 引数radiusに半径を入力する
    var area = radius * radius * 3.14;  // 計算
    return area;
}

document.write('<p>半径5cmの円の面積は' + circleCalc(5) + 'です。</p>')
document.write('<p>半径10cmの円の面積は' + circleCalc(10) + 'です。</p>')
document.write('<p>半径15cmの円の面積は' + circleCalc(15) + 'です。</p>')