/* 
  Напишите функцию countFrequency, 
  которая принимает массив строк и возвращает Map, 
  где ключи - это элементы массива, а значения - количество их вхождений.
*/

export function countFrequency(arr: string[]): Map<string, number> {
  const map = new Map();
  
  for (let elem of arr) {
	if (map.has(elem)) continue;
	let tmp: string [] = arr.filter((fillElem) => fillElem === elem)
	map.set(elem, tmp.length)
  }

  return map;
}
