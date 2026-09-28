/* 
	Создайте функцию groupProductsByPrice, 
	которая группирует товары в категории: "дешевые" (<1000), "средние" (1000-5000), "дорогие" (>5000). 
	В функции не должно быть циклов.
*/

type Product = {name: string, price: number};
type GroupedProducts = {cheap: Product[], medium: Product[], expensive: Product[]};

export function groupProductsByPrice(products: Product[]): GroupedProducts {

	return products.reduce((acc, elem: Product) => {
		if (elem.price < 1000) acc.cheap.push(elem)
		else if (elem.price > 5000) acc.expensive.push(elem)
		else acc.medium.push(elem)
		
		return acc;
	}, {
		cheap: [],
		medium: [],
		expensive: []
	} as GroupedProducts);
}
