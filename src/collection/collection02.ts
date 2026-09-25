/* 
	Реализуйте итератор для объекта obj, 
	чтобы при использовании в цикле for...of он 
	возвращал значения свойств объекта, а не ключи.
*/

export const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
	let count = 0;
	let objess = [this.a, this.b, this.c]

	return {
		next():IteratorResult<number> {
			if (count < objess.length) {
				const tmp =  {
					value: objess[count],
					done: false
				}
				count++;
				return tmp;
			}

			return {
				value: undefined,
				done: true
			}
		}
	}
  }
};

