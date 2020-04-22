// var age = 65;
// var isMember = true;
// var result = null;

// if (age >= 60 && isMember) {
//     result = 'シニア会員割引の対象です';
// } else {
//     result = 'シニア会員割引の対象ではありません';
// }

// document.write(result);


// 15 歳以下は 800 円、ポイント会員の場合には 1000 円、 そうではない場合には 1800 円の映画のチケットがあります。
// 年齢と会員であるかどうかを変数に代入すると、チケットの値段を教えてくれるプログラムを書いてみましょう。
// なお、15 歳以下かつ会員の場合には、 800 円 になるものとします。
// 例として、16 歳の会員のチケットの値段を出して下さい。

var age = 16;  // 例題指定の16歳
var isMember = true  // 会員かどうかをBoolean型で記載、今回はtrue

if (age <= 15) {
    result = '800円';
} else if (isMember === true) {  // '=== true'は省略出来る
    result = '1000円';
} else {
    result = '1800円';
}

document.write(result);
