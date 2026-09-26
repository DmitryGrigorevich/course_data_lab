/* 
	Напишите функцию findIntersection, 
	которая принимает два массива и возвращает массив их общих элементов, используя Set.
*/

export function findIntersection(arr1: number[], arr2: number[]): number[] {
	const intersection = new Set<number>();

	const set1 = new Set<number>([...arr1]);
	const set2 = new Set<number>([...arr2]);

	set1.forEach((elem) => {
		if (set2.has(elem)) intersection.add(elem)
	})
  

	return [...intersection];
}
