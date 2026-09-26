/* 
	Создайте функцию countByRanges,
	которая принимает массив чисел и массив диапазонов, 
	возвращает Map, где ключи - строковые представления диапазонов, 
	а значения - количество чисел, попадающих в каждый диапазон.
*/

export function countByRanges(numbers: number[], ranges: [number, number][]): Map<string, number> {
	const result = new Map<string, number>();

	const value: number [] = ranges.map(elem => {
		const firstDig = elem[0];
		const secDig = elem[1];
		const count = numbers.reduce((acc, cur) => 
			cur >= firstDig && cur <= secDig ? acc + 1 : acc, 0
		)
		return count;
	})
	
	ranges.forEach((elem, ind) => result.set(`${elem[0]}-${elem[1]}`, value[ind]))

	return result;
}

/*
	const numbers = [1, 5, 10, 15, 20, 25];
    const ranges: [number, number][] = [[0, 10], [11, 20], [21, 30]];


    const result = countByRanges(numbers, ranges);
    expect(result.get('0-10')).toBe(3); // 1, 5, 10
    expect(result.get('11-20')).toBe(2); // 15, 20
    expect(result.get('21-30')).toBe(1); // 25
*/