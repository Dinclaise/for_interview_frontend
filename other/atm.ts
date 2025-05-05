const nominals = [50, 100, 200, 500, 1000, 5000]
const nominalsCount = [10, 10, 10, 6, 3, 3]

export const atm = (amount: number, nominals, nominalsCount) => {
    if (!amount) {
        return []
    }

    let rest = amount
    let result = [];

    for (let i = nominals.length - 1; i > 0; i--) {
        let nominal = nominals[i]
        let maxAmountNominals = nominalsCount[i]

        let count = Math.min(Math.floor(rest / nominal), maxAmountNominals)

        if (count > 0) {
            rest -= count * nominal
            result.push(`${nominal}x${count}`)
        }
    }

    if (rest > 0) {
        result.push(`remain-${rest}`)
    }
    return result
}


console.log('atm', atm(14700, nominals, nominalsCount))
