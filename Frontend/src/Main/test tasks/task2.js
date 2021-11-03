function handleParagraph() {
    let p = document.querySelector('p');
    let processedP = convertP(p.innerText);
    let cloneP = document.createElement('p');
    cloneP.innerHTML = processedP;
    p.insertAdjacentElement('afterend', cloneP);
}

function convertP(paragraph) {
    let resultParagraph = [];
    let words = paragraph.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word[0] === 'r' || word[0] === 'R') {
            word = wordProcess(word);
        }
        resultParagraph.push(word);
    }
    return resultParagraph.join(' ');
}

function wordProcess(word) {
    let rWord = isolateRWord(word);
    let otherSymbols = word.slice(rWord.length);
    let reverseRWord = wordReverse(rWord);
    let wrappedWord = wrapInSpan(reverseRWord);

    return wrappedWord + otherSymbols;
}

function isolateRWord(word) {
    let rWord = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'a' && word[i] <= 'z' || word[i] >= 'A' && word[i] <= 'Z') {
            rWord.push(word[i]);
        }
    }

    return rWord;
}

function wrapInSpan(word) {
    return '<span style="background-color: red; color: white;">' + word.join('') + '</span>';
}

function wordReverse(word) {
    let result = [];

    for (let i = word.length - 1; i >= 0; i--) {
        result.push(word[i]);
    }

    return result;
}

handleParagraph();