/* 
	Реализовать функцию calculateOrderTotal(xmlDoc),
	которая принимает XML-документ xmlDoc и возвращает общую стоимость заказа.

	Пример XML:
<order id="123">
  <items>
    <item productId="1" price="100" quantity="2"/>
    <item productId="2" price="50" quantity="3"/>
    <item productId="3" price="200" quantity="1"/>
  </items>
</order>
*/


export interface OrderWithPrices {
  id: string;
  items: {
    productId: string;
    price: number;
    quantity: number;
  }[];
}

export function calculateOrderTotal(xmlDoc: Document): number {
	const items = Array.from(xmlDoc.getElementsByTagName("item"));

	if (items.length === 0) return 0;

	const total = items.reduce((count, elem) => {
		const price = Number(elem.getAttribute("price"));
		const total = Number(elem.getAttribute("quantity"));
		return count + (price * total);
	}, 0);

	return total;
}