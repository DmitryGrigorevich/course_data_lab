/* 
	Создайте функцию getUnique, которая принимает массив чисел 
	и возвращает новый массив только с уникальными элементами, используя Set.
*/

export function getUnique(arr: number[]): number[] {
	const newSet = new Set(arr);
	return [...newSet]
}
