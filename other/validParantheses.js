const isValidParantheses = (parantheses) => {
    const rules = {
        '(': ')',
        ')': '(',
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{'
    }

    let openedParantheses = ['(', '[', '{'];

    let lastOpenedP = '';
    let currentPs = [];

    for (let i = 0; i < parantheses.length; i++) {
        let currentParanthese = parantheses[i];

        if (openedParantheses.includes(currentParanthese)) {
            lastOpenedP = currentParanthese;
            currentPs.push(currentParanthese);
            continue;
        }

        if (rules[currentParanthese] === lastOpenedP) {
            currentPs.pop();
        } else {
            return false;
        }
    }

    if (currentPs.length === 0) return true
}

console.log(isValidParantheses("()[]{}"));
