//There is an array of strings. All strings contains similar letters except one. Try to find it!


//findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
//findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

const array = ['acb', 'foo', 'bac', 'abcaaaaaaaaaaaaaa', 'bca', 'cab', 'cba'];

const findUniq = (array) => {
    let oddWordsCounter = 0;
    let resultIndex;
    const sampleArray = [...new Set(array[0].toLowerCase().split(''))];

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (!sampleArray.includes(array[i][j].toLowerCase())) {
                oddWordsCounter++;
                resultIndex = i;

                if (oddWordsCounter === 2) {
                    return array[0];
                }
                break;
            }
        }
    }

    return array[resultIndex];
}

console.log(findUniq(array));

// findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');