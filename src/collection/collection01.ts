/* 
	Создайте генераторную функцию numberGenerator, 
	которая принимает число max и возвращает генератор,
	yielding числа от 1 до max включительно.
*/

export function* numberGenerator(max: number) {
	for (let elem = 1; elem <= max; elem++) {
		yield elem;
	}
}


