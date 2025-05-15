interface User {
    name: string,
    age: number,
    occupation: string
}

interface Admin {
    name: string,
    age: number,
    role: string
}


type Person = User | Admin

export const person = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Janna Doe",
        age: 27,
        role: "Admin"
    }
]

// #1
export function logPerson(person: Person) {
    let additionalInfo: string

    if ('role' in person) {
        additionalInfo = person.role
    } else {
        additionalInfo = person.occupation
    }
}

// #2

class Employee {
    name: string;
    age: number;
    role: string;

    constructor(name: string, age: number, role: string) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

class Freelancer {
    name: string;
    age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}

type Proff = Employee | Freelancer

// Type Guard для проверки наличия свойства 'role'
// function hasRole(person: any): person is { role: string } {
//     return "role" in person;
// }

function hasRole(person: Proff): person is Employee {
    return "role" in person;
}

// Функция с дженериком для логирования работников
function logWorker<T extends Proff>(worker: T) {
    let additionalInformation: string;

    if (worker instanceof Employee) {
        additionalInformation = worker.role;
    } else if (worker instanceof Freelancer) {
        additionalInformation = worker.occupation;
    } else if (hasRole(worker)) {
        additionalInformation = worker.role;
    } else {
        additionalInformation = "No additional info";
    }

    console.log(`- ${worker.name}, Age: ${worker.age}, Info: ${additionalInformation}`);
}

// Тестирование
const employee = new Employee("John Doe", 30, "Developer");
const freelancer = new Freelancer("Jane Smith", 28, "Designer");

logWorker(employee); // - John Doe, Age: 30, Info: Developer
logWorker(freelancer); // - Jane Smith, Age: 28, Info: Designer
