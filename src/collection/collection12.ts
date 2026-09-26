/* 
	Напишите функцию-обертку cache, которая кэширует результаты вызова функции с помощью Map,
	чтобы избежать повторных вычислений для одинаковых аргументов.
*/

export function cache<T extends (...args: any[]) => any>(fn: T): T {
	const cacheMap = new Map<string, any>();

	return function(this: any, ...args: any[]) {
		const key = JSON.stringify(args);
		
		if (cacheMap.has(key)) return cacheMap.get(key);

		const res = fn.apply(this, args);
		cacheMap.set(key, res);

		return res;
	
	} as T;
}
