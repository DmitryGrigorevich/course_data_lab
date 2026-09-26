/* 
	Создайте функцию invertMap, 
	которая принимает Map и возвращает новый Map, 
	где ключи и значения поменяны местами.
*/

export function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
	const newMap = new Map<V, K>();
	const arrForMap: [V, K][]= [];

	map.forEach((value, key) => arrForMap.push([value, key]))
	arrForMap.forEach(elem => newMap.set(elem[0], elem[1]))

	return newMap;
}
