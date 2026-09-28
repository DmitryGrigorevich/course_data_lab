/* 
	Напишите функцию getOrderStats, 
	которая принимает массив заказов и возвращает объект с общей суммой, 
	количеством и средним чеком только завершенных заказов (status: 'completed').
*/

type Order = {status: string, amount: number}
type Stats = {total: number, count: number, average: number}

export function getOrderStats(orders: Order[]): Stats{
	const completedOrder = orders.filter(order => order.status === 'completed');
	const total = completedOrder.reduce((acc, elem) => acc + elem.amount, 0);

	return {
		total: total,
		count: completedOrder.length,
		average: completedOrder.length / total
	}
}
