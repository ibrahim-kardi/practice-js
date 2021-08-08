const names = ['jodu', 'modu', 'kodu', 'modu', 'jodu'];

function skipDuplicate(names) {
    const uniqname = [];

    for (const element of names) {
        console.log(element);
        if (uniqname.indexOf(element) == -1) {
            uniqname.push(element);
        }
    }
    return uniqname;
}

const uniqName = skipDuplicate(names);

console.log(uniqName);