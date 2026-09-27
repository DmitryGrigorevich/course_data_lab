/* 
	Создайте функцию getTopRatedInCategory, 
	которая возвращает 3 товара с наивысшим рейтингом в указанной категории. 
	Функция не должна использовать циклы.
*/

type Product = {category: string, rating: number, name: string}

export function getTopRatedInCategory(products: Product[], category: string): Product[] {
	const needProd = products.filter(prod => prod.category === category);
	needProd.sort((a, b) =>  a.rating - b.rating);

	return needProd.reverse().slice(0, 3);
}
