/* 
	Создайте функцию getTopAdultUsers, 
	которая возвращает пользователей старше 18 лет с рейтингом выше 4.5, отсортированных по имени.
*/

type User = {
  name: string;
  age: number;
  rating: number;
};

export function getTopAdultUsers(users: User[]): User[] {
	const needUsers = users.filter(elem => elem.age > 18 && elem.rating > 4.5);
	needUsers.sort((a, b) => a.name.localeCompare(b.name))

	return needUsers;
		
}


