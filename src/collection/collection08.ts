/* 
	Создайте функцию unionSets, 
	которая принимает два Set и возвращает новый Set, 
	содержащий все элементы из обоих множеств. 
*/

export function unionSets<T>(set1: Set<T>, set2: Set<T>): Set<T> {
	const newSet = new Set(set1)

	set2.forEach(elem => newSet.add(elem))

	return newSet;
}


