/* 
	Создайте функцию getVerifiedEmails,
	которая принимает массив пользователей и возвращает массив email-адресов только тех пользователей,
	у которых email подтвержден.
*/

export type User = {email: string, verified: boolean};

export function getVerifiedEmails(users: User[]): string[] {
	const verifiedEmail = users.filter(elem => elem.verified)

	return verifiedEmail.map(elem => elem.email)
}

