let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

const addExcitement = (theWordArray, expressHere) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        let j = i + 1;
        if (j % 3 === 0) {
            buildMeUp += `${sentence[i]}${expressHere} `
        } else {
            buildMeUp += `${sentence[i]} `
        }
        console.log(buildMeUp)
    }
}

addExcitement(sentence, "?")