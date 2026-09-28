/* 
	Напишите функцию groupByCategory, 
	которая принимает массив объектов и имя свойства для группировки, 
	возвращает объект, где ключи - значения свойства, а значения - массивы объектов.
*/

export function groupByCategory<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
	return arr.reduce((acc , elem) => {
		if (!acc[elem[key]]) {
			acc[elem[key]] = []
		}

		acc[elem[key]].push(elem)
		return acc;
	}, {} as Record<T[keyof T], T[]>);
}



/*
const users = [
    { name: "Иван", age: 20, city: "Москва" },
    { name: "Пётр", age: 25, city: "СПб" },
    { name: "Анна", age: 22, city: "Москва" }
];

{
    Москва: [
        { name: "Иван", age: 20, city: "Москва" },
        { name: "Анна", age: 22, city: "Москва" }
    ],
    СПб: [
        { name: "Пётр", age: 25, city: "СПб" }
    ]
}
*/