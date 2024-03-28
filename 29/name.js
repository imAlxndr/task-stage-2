const firstName = 'Иван';
const lastName = 'Иванов';
const middleName = 'Иванович';
const birthYear = 1990;
const department = 'информационные системы и технологий';

// Конкатенация с помощью оператора плюс +
const result1 = 'Имя: ' + firstName + '\n' +
                'Фамилия: ' + lastName + '\n' +
                'Отчество: ' + middleName + '\n' +
                'Год рождения: ' + birthYear + '\n' +
                'Направление: ' + department;

// Конкатенация с помощью бектиков и интерполяции строк
const result2 = `Имя: ${firstName}
Фамилия: ${lastName}
Отчество: ${middleName}
Год рождения: ${birthYear}
Направление: ${department}`;

console.log(result1);
console.log(result2);