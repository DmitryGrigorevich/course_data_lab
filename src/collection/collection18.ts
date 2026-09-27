/* 	
	Напишите функцию getAffordableInStockProducts, 
	которая фильтрует продукты по цене (дешевле 1000) и наличию на складе, затем возвращает их названия.
*/

type Product = {name: string, price: number, inStock: boolean};

export function getAffordableInStockProducts(products: Product[]): string[] {
	const filProd = products.filter(elem => {
		if (elem.price < 1000 && elem.inStock) {
			return elem
		}
	})

	return filProd.map(elem => elem.name)
}
