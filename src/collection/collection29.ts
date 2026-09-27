/* 
	Напишите функцию calculateTotalProgress, 
	которая вычисляет общий прогресс пользователей, учитывая только активных и с прогрессом > 50%.
*/

type User = {active: boolean, progress: number}

export function calculateTotalProgress(users: User[]): number {
	const needUsers = users.filter(user => user.active && user.progress > 50);
	const commonProgress = needUsers.reduce((total, user) => total + user.progress, 0) / needUsers.length;

	return commonProgress

}