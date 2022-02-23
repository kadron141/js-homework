'use strict'

const LANGUAGES = [
    {
        id: 'js',
        label: 'JavaScript',
        aliases: ['js', 'es', 'ts'],
    },
    {
        id: 'python',
        label: 'Python',
        aliases: ['py', 'pt'],
    },
    {
        id: 'csharp',
        label: 'C#',
        aliases: ['sharp', 'c sharp']
    },
]

const users = [];
const validLanguages = [];

for (let i = 0; i < 3; i++) {
    const name = prompt('name');
    const surname = prompt('surname');
    const lang = prompt('language');

    users.push({
        fullName: name + ' ' + surname,
        lang: lang,
    })
}

console.log(users);

for (let i = 0; i < users.length; i++) {
    if (!isLangValid(getUserLang(users[i]))) {
        console.error(`${users[i].fullName} has an invalid language value of ${users[i].lang}`);
    } else {
        validLanguages.push(getLangId(getUserLang(users[i])));
        console.log(validLanguages);
    }
}

let isLangsSame = true;
const sampleLang = validLanguages[0];

for (let i = 1; i < validLanguages.length; i++) {
    if (sampleLang !== validLanguages[i]) {
        isLangsSame = false;
        console.log('Languages are different');
        break;
    }
}

if (isLangsSame) {
    console.log('Languages are the same');
}

function isLangValid(userLang) {
    for (let j = 0; j < LANGUAGES.length; j++) {
        if (userLang === LANGUAGES[j].label.toLowerCase() || LANGUAGES[j].aliases.includes(userLang)) {
            return true;
        }
    }

    return false;
}

function getUserLang(user) {
    return user.lang.toLowerCase();
}

function getLangId(userLang) {
    for (let j = 0; j < LANGUAGES.length; j++) {
        if (userLang === LANGUAGES[j].label.toLowerCase() || LANGUAGES[j].aliases.includes(userLang)) {
            return LANGUAGES[j].id;
        }
    }
}

