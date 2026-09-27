/* 
	Создайте функцию sumProperty, 
	которая принимает массив объектов с числовыми свойствами 
	и возвращает сумму всех значений указанного свойства.
*/

export function sumProperty<T>(objects: T[], property: keyof T): number {
	const needNumbers = objects.map(elem => elem[property]);

	return needNumbers.reduce((total, elem) => total + (elem as number), 0)
}


