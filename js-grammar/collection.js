var classes = ['A組', 'B組', 'C組', 'D組'];

for (var grade = 1; grade < 4; grade++) {
    for (var i = 0; i < classes.length; i++) {
        // pタグで囲ったx年y組の文字列を作る
        document.write('<p>' + grade + '年' + classes[i] + '</p>');
    }
}