function parseCSV(csvString) {
    const rows = csvString.trim().split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map(row => {
        const values = row.split(',');
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });
    return data;
}

// Пример использования
const csvData = `name,age,city
John,30,New York
Jane,25,Los Angeles
Doe,22,Chicago`;

const parsedData = parseCSV(csvData);
console.log(parsedData);
// Вывод: [{name: "John", age: "30", city: "New York"}, {name: "Jane", age: "25", city: "Los Angeles"}, {name: "Doe", age: "22", city: "Chicago"}]
