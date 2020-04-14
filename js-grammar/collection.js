var hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ']

for (var countOne = 0; countOne < hiragana.length; countOne++) {
    for (var countTwo = 0; countTwo < hiragana.length; countTwo++) {
        document.write('<p>' + hiragana[countOne] + hiragana[countTwo] + '</p>');
    }
}