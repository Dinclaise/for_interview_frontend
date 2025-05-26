const nominals = [50, 100, 200, 500, 1000, 5000]
const nominalsCount = [10, 10, 10, 6, 3, 3]

export const atm = (amount: number, nominals, nominalsCount) => {
    if (!amount) {
        return []
    }

    let rest = amount
    let result = [];

    for (let i = nominals.length - 1; i > 0; i--) {
        const currNominal = nominals[i];

        const remainder = Math.floor(rest / currNominal)
        let maxAmountNominals = nominalsCount[i];
        const getMaxAmountOfNominals = Math.min(maxAmountNominals, remainder);


        if (getMaxAmountOfNominals > 0) {
            rest -= getMaxAmountOfNominals * currNominal
            result.push(`${currNominal}x${getMaxAmountOfNominals}`)
        }

        if (rest === 0) break;
    }

    if (rest > 0) {
        result.push(`remain-${rest}`)
    }
    return result
}


console.log('atm', atm(14700, nominals, nominalsCount))
